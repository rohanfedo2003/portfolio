

const Work = () => {
    return (
        <div id="work" className="w-full px-5 md:px-20 py-20">
            <h4 className="text-center text-lg mb-2 text-gray-900">My portfolio</h4>
            <h2 className="text-center text-4xl mb-12 font-bold text-gray-900">My latest Mini project</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Work items */}
                {[
                    { title: 'Pdf ChatBot', type: 'LLM ', img: 'https://studyopedia.com/wp-content/uploads/2025/10/AI-Agents-Tutorial-300x200.png' },
                    { title: 'AI Recruiter', type: 'Ai Agent', img: 'https://smartcomputertraininginstitute.org.in/wp-content/uploads/2025/09/best-ai-agents-in-india-smart-computer-ti-300x200.png' },
                    { title: 'Ecommerce Website', type: 'React Js', img: 'https://miro.medium.com/1*VNoETQG1aBwujmj9qMBbLQ.png' },
                    { title: 'Data Analysis', type: 'Dashboard ', img: 'https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740&q=80' },
                ].map((project, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow bg-no-repeat bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: `url(${project.img})` }}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg translate-y-2 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-base text-gray-900">{project.title}</h3>
                                <p className="text-xs text-gray-500">{project.type}</p>
                            </div>
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">↗</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full text-center mt-10">
                <button className="border border-gray-400 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">Show more →</button>
            </div>
        </div>
    );
};

export default Work;
