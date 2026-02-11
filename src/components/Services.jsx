

const Services = () => {
    return (
        <div id="services" className="w-full px-5 md:px-20 py-20 bg-gray-50">
            <h4 className="text-center text-lg mb-2 text-gray-900">What I offer</h4>
            <h2 className="text-center text-4xl mb-12 font-bold text-gray-900">My Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {['Web Design', 'AI Chatbots', 'AI Apps (React + Python)', 'AI Agents'].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                        <h3 className="font-bold text-xl mb-2 text-gray-900">{item}</h3>
                        <p className="text-gray-500 text-sm">Providing high-quality {item.toLowerCase()} services to clients.</p>
                        <div className="mt-4 text-sm font-medium text-gray-800 cursor-pointer hover:underline">Read more →</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
