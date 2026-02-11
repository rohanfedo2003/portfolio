import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full py-5 px-5 md:px-20 flex justify-between items-center z-50 fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-md">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer">
                    Rohan Fernando R<span className="text-purple-600">.</span>
                </h1>
            </div>

            <div className="hidden md:flex gap-10 font-medium text-gray-600 items-center">
                <a href="#home" className="hover:text-black hover:scale-105 transition-transform cursor-pointer">Home</a>
                <a href="#about" className="hover:text-black hover:scale-105 transition-transform cursor-pointer">About me</a>
                <a href="#services" className="hover:text-black hover:scale-105 transition-transform cursor-pointer">Services</a>
                <a href="#work" className="hover:text-black hover:scale-105 transition-transform cursor-pointer">My Work</a>
                <a href="#contact" className="hover:text-black hover:scale-105 transition-transform cursor-pointer">Contact me</a>
            </div>

            <div className="hidden md:block">
                <button className="flex items-center gap-2 border border-gray-300 px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer">
                    Contact <img src="/assets/arrow-icon.svg" className="w-3" alt="" />
                    {/* Placeholder for icon if image not present, using text for now if image fails */}
                    <span className="text-lg">↗</span>
                </button>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl cursor-pointer">
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 right-0 w-full bg-white p-10 flex flex-col gap-6 font-medium text-gray-600 shadow-xl md:hidden">
                    <a href="#home" onClick={toggleMenu} className="hover:text-black">Home</a>
                    <a href="#about" onClick={toggleMenu} className="hover:text-black">About me</a>
                    <a href="#services" onClick={toggleMenu} className="hover:text-black">Services</a>
                    <a href="#work" onClick={toggleMenu} className="hover:text-black">My Work</a>
                    <a href="#contact" onClick={toggleMenu} className="hover:text-black">Contact me</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
