import React, {useEffect, useState} from 'react'
import nav from "../assets/NavImage/NavIcon.png";
import {Button} from "./ui/button.jsx";
import {Menu, X} from "lucide-react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    const menuItems = [
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#faqs", label: "FAQs" },
    ]

    return (
        <>
        <header className="sticky top-0 left-0 right-0 z-20 bg-[#2C2F1E] bg-opacity-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="w-20 relative">
                        <img src={nav}
                             alt="Logo"
                        />
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8 bg-white bg-opacity-5 border-[#404138] border-[0.5px] rounded-full px-8 py-2">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href}
                                       className="text-muted hover:text-[#DDFF00] font-urbanist font-thin">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hidden md:block">
                        <Button
                            className="bg-primary text-[#0D0D0D] font-urbanist font-medium hover:bg-primary rounded-full">Explore</Button>
                    </div>
                    <button className="md:hidden text-white" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#c5f82a] to-transparent opacity-50"></div>
        </header>

    {/* Mobile menu */
    }
    <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-90 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
        <div
            className={`flex flex-col items-center justify-center h-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav>
                <ul className="flex flex-col space-y-6 text-center">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="text-2xl text-muted hover:text-[#DDFF00] font-urbanist font-thin" onClick={closeMenu}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <Button className="bg-[#c5f82a] text-black hover:bg-[#d6ff3a] mt-8 rounded-full">Explore</Button>
        </div>
    </div>
     </>
)
}

export default Navbar
