
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import LoadingScreen from './components/ui/LoadingScreen'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Pathname'i base path'ten bağımsız normalize et
function getNormalizedPath() {
  const raw = window.location.pathname
  // Trailing slash'ı kaldır, küçük harfe çevir
  return raw.replace(/\/$/, '') || '/'
}

function App() {
  const [loaded, setLoaded] = useState(false)
  const [pathname, setPathname] = useState(getNormalizedPath)

  useEffect(() => {
    const handleNavigation = () => setPathname(getNormalizedPath())
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  // /contact veya /senwood/contact
  if (pathname === '/contact' || pathname.endsWith('/contact')) {
    return (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    )
  }

  // Anasayfa: / veya /senwood
  if (pathname === '/' || pathname === '/senwood') {
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

  return <NotFound />
}

export default App
