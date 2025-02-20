import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import hero from "../assets/HeroImage/HeroImg.jpg";
import { useInView } from "react-intersection-observer";

export default function HeroPage() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <img
                src={hero}
                alt="Background"
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10">
                <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-5">
                    <div ref={ref} className="max-w-4xl w-full relative px-4 md:px-8">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl mb-10 relative z-10 font-urbanist"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
                        >
                            <span className="font-semibold leading-relaxed">Innovation in Every Pixel,</span>
                            <br />
                            Efficiency in Every Line of Code
                        </motion.h1>
                        <motion.p
                            className="text-muted text-lg mb-10 max-w-2xl mx-auto font-urbanist"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
                        >
                            Welcome to NeonX Digital, where technology meets artistry.
                            We're not just developers, we're digital architects, crafting seamless,
                            high-performance experiences that command attention.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
                        >
                            <div className="bg-secondary rounded-full flex w-full max-w-md py-2 px-3 border-[#404138] border-[0.5px]">
                                <Input
                                    type="email"
                                    placeholder="raniaelmorabet@gmail.com"
                                    className="bg-transparent border-none ring-transparent outline-none text-muted rounded-l-full px-6 py-3 flex-grow font-urbanist tracking-wide"
                                />
                                <Button className="bg-primary text-black hover:bg-[] rounded-full px-6 py-3 font-urbanist ">
                                    Submit Now
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}