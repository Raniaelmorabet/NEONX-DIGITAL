import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import hero from "../assets/HeroImage/HeroImg.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function HeroPage() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error and success messages
        setError("");
        setSuccess("");

        // Validate email
        if (!email.trim()) {
            setError("Email is required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const templateParams = {
                design_service: "Hello, I would like to get in touch with you!",
                email: email,
              };

            await emailjs.send(
                "service_2d25cum",
                "template_oq33mr9",
                templateParams,
                "5eR8XMsDN1mBxKRpk" 
            );

            setSuccess("Message sent successfully!");
            setEmail("");
        } catch (error) {
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                            <form onSubmit={handleSubmit} className="bg-secondary rounded-full flex w-full max-w-md py-2 px-3 border-[#404138] border-[0.5px]">
                                <Input
                                    type="email"
                                    placeholder="neonx.digital11@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-none ring-transparent outline-none text-muted rounded-l-full px-6 py-3 flex-grow font-urbanist tracking-wide"
                                />
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-primary text-black hover:bg-[] rounded-full px-6 py-3 font-urbanist"
                                >
                                    {loading ? "Sending..." : "Submit Now"}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Error Message */}
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center text-red-500 text-lg mt-4"
                            >
                                {error}
                            </motion.p>
                        )}

                        {/* Success Message */}
                        {success && (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center text-green-500 text-lg mt-4"
                            >
                                {success}
                            </motion.p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}