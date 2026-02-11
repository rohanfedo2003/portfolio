import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="w-full px-5 md:px-20 py-20 bg-gray-50 flex flex-col items-center">
            <h4 className="text-center text-lg mb-2 text-gray-900">Connect with me</h4>
            <h2 className="text-center text-4xl mb-12 font-bold text-gray-900">Get in touch</h2>

            <p className="text-center max-w-2xl mb-10 text-gray-500">
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="text" placeholder="Enter your name" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-gray-50" />
                    <input type="email" placeholder="Enter your email" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-gray-50" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors mb-6 bg-gray-50"></textarea>
                <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-lg">
                    Submit now <span>→</span>
                </button>
            </form>
        </div>
    );
};

export default Contact;
