import React from 'react';

const Hero = () => {
    return (
        <div id="home" className="w-full min-h-screen flex flex-col items-center justify-center px-4 text-center py-20">
            <div className="mb-6 relative">
                
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <img src="\WhatsApp Image 2026-02-04 at 12.20.29 PM (1).jpeg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-2 text-xl rounded-full shadow-md">👋</div>
            </div>

            <h3 className="text-xl md:text-2xl mb-4 font-normal">Hi! I'm Rohan 👋</h3>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6 tracking-tight leading-tight max-w-4xl">
                React.js | Tailwind CSS |<br className="hidden md:block" /> Python 
            </h1>

            <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                I’m passionate about crafting responsive and intuitive web experiences.
                I work with React.js and Tailwind CSS at a beginner-to-intermediate level, with additional experience in Python, SQL, Data Science,
                 and a growing interest in LLM-based applications
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <a href="#contact" className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    contact me <span>→</span>
                </a>
                <a href="\Rohan CV (1).pdf" download="Rohan_CV.pdf"className="px-8 py-3.5 bg-white border border-gray-200 text-black rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                    Download my resume <span>⬇</span>
                </a>
            </div>
        </div>
    );
};

export default Hero;
