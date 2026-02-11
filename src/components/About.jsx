import React from 'react';

const About = () => {
    return (
        <div id="about" className="w-full px-5 md:px-20 py-20 flex flex-col items-center">
            <h4 className="text-center text-lg mb-2 text-gray-900">Introduction</h4>
            <h2 className="text-center text-4xl mb-12 font-bold text-gray-900">About me</h2>

            <div className="flex w-full flex-col md:flex-row items-center gap-20">
                <div className="w-full md:w-[35%]">
                    
                    <div className="w-full h-100 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                        <img src="\WhatsApp Image 2026-02-04 at 12.20.29 PM (1).jpeg" alt="About" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex-1 text-gray-600">
                    <p className="mb-8 leading-relaxed text-lg">
                     Aspiring Python and AI-focused developer with experience in Data Science and LLMs.
                    I build AI-driven applications and APIs using Python, OpenAI, FastAPI, SQL, and design interfaces with React.js and Tailwind CSS.                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 p-6 rounded-2xl hover:bg-gray-50 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                            <div className="text-xl mb-3">{'</>'}</div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Languages</h3>
                            <p className="text-sm">React JS, Python , Sql</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-2xl hover:bg-gray-50 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                            <div className="text-xl mb-3">🎓</div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Education</h3>
                            <p className="text-sm">Msc Applied Data Science</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-2xl hover:bg-gray-50 hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                            <div className="text-xl mb-3">💼</div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">Projects</h3>
                            <p className="text-sm">Built  3 mini - projects</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="font-medium text-lg mb-4 text-gray-900">Tools I use</h3>
                        <div className="flex gap-4 flex-wrap">
                            <span className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg 
                                    hover:shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    VS
                                    </span>

                                    <span className="px-4 h-12 flex items-center justify-center border border-gray-200 rounded-lg 
                                    hover:shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    Kaggle Notebook
                                    </span>

                                    <span className="px-4 h-12 flex items-center justify-center border border-gray-200 rounded-lg 
                                    hover:shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    Node.js
                                    </span>

                                    <span className="px-4 h-12 flex items-center justify-center border border-gray-200 rounded-lg 
                                    hover:shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    Postman
                                    </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
