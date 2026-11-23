
import { type MouseEvent } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 45,
        damping: 22,
    });

    const springY = useSpring(mouseY, {
        stiffness: 45,
        damping: 22,
    });

    const visualX = useTransform(springX, [-1, 1], [-10, 10]);
    const visualY = useTransform(springY, [-1, 1], [8, -8]);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(
            ((e.clientX - rect.left) / rect.width - 0.5) * 2
        );

        mouseY.set(
            ((e.clientY - rect.top) / rect.height - 0.5) * 2
        );
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <main
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen bg-[#F3F0E9] text-[#302B25] flex flex-col overflow-hidden"
        >
            {/* HEADER */}
            <header className="relative z-20 px-7 md:px-16 py-8">
                <a
                    href="/"
                    className="inline-block text-[21px] font-medium tracking-[0.19em]"
                >
                    ŞENWOOD
                </a>
            </header>

            {/* MAIN */}
            <section className="relative flex-1 flex items-center px-7 md:px-16 lg:px-24 py-12">

                <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-8 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-9">
                            <span className="w-7 h-px bg-[#94765A]" />
                            <span className="text-[10px] tracking-[0.28em] uppercase text-[#94765A]">
                                Error 404
                            </span>
                        </div>

                        <h1 className="font-serif text-[clamp(115px,17vw,205px)] leading-[0.78] tracking-[-0.075em] text-[#393128]">
                            404<span className="text-[#A68A6B]">.</span>
                        </h1>

                        <div className="mt-12 max-w-[440px]">
                            <h2 className="font-serif text-[32px] md:text-[43px] leading-[1.15]">
                                Her şeyin bir yeri var.
                                <br />
                                <span className="text-[#A68A6B] italic">
                                    Burası değil.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[355px] text-[14px] leading-[1.9] text-[#81776B]">
                                Aradığınız sayfa yerinde olmayabilir.
                                Ama keşfedecek daha pek çok şey var.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a href="/#home" className="hero-button hero-button-primary">
                                Anasayfaya Dönün
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.1,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="relative w-full max-w-[580px] mx-auto lg:ml-auto"
                    >
                        <motion.div
                            style={{
                                x: visualX,
                                y: visualY,
                            }}
                            className="relative aspect-[0.95/1] w-full"
                        >
                            {/* Background frame */}
                            <div className="absolute inset-[5%] bg-[#E5DFD3]" />

                            {/* Main wooden slab */}
                            <div
                                className="absolute left-[15%] top-[13%] w-[69%] h-[72%] shadow-[20px_28px_45px_rgba(55,42,29,0.15)]"
                                style={{
                                    background: `
                    repeating-linear-gradient(
                      93deg,
                      transparent 0px,
                      rgba(60,35,17,0.06) 2px,
                      transparent 5px,
                      transparent 11px
                    ),
                    linear-gradient(
                      115deg,
                      #A9825C 0%,
                      #8E6848 28%,
                      #B18B65 52%,
                      #79583E 100%
                    )
                  `,
                                }}
                            >
                                {/* Wood grain highlights */}
                                <div className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `
                      repeating-linear-gradient(
                        175deg,
                        transparent 0px,
                        rgba(245,220,183,0.16) 1px,
                        transparent 3px,
                        transparent 24px
                      )
                    `,
                                    }}
                                />

                                {/* Missing piece */}
                                <div className="absolute right-0 bottom-0 w-[43%] h-[43%] bg-[#E5DFD3] shadow-[-12px_-12px_25px_rgba(40,30,20,0.10)]" />

                                {/* Inner edge detail */}
                                <div className="absolute right-[43%] bottom-0 w-px h-[43%] bg-[#D2B18B]/50" />
                                <div className="absolute right-0 bottom-[43%] h-px w-[43%] bg-[#D2B18B]/50" />
                            </div>

                            {/* Floating wooden piece */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute right-[12%] bottom-[8%] w-[30%] aspect-square shadow-[12px_18px_25px_rgba(45,32,20,0.15)]"
                                style={{
                                    background: `
                    repeating-linear-gradient(
                      90deg,
                      transparent 0px,
                      rgba(55,32,16,0.08) 2px,
                      transparent 5px,
                      transparent 12px
                    ),
                    linear-gradient(135deg, #C19A70, #896346)
                  `,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 mx-7 md:mx-16 border-t border-[#393128]/15 py-6 flex justify-between items-center">
                <span className="text-[9px] tracking-[0.17em] uppercase text-[#95897A]">
                    ŞENWOOD © 2026
                </span>
            </footer>
        </main>
    );
}
