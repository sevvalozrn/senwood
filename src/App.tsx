
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import LoadingScreen from './components/ui/LoadingScreen'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)

    return () => {
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])


  if (pathname === '/contact') {
    return (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    )
  }

  if (pathname !== '/') {
    return <NotFound />
  }

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <Header />

      <main>
        <Hero />
        <About />
        <Services />
      </main>

      <Footer />
    </>
  )
}

export default App
