const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Simple. Transparent. Effective.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Report", desc: "Submit your complaint with evidence", icon: "📝" },
            { step: "02", title: "Track", desc: "Monitor your case status in real-time", icon: "🔍" },
            { step: "03", title: "Resolve", desc: "Get justice with community support", icon: "⚖️" },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {item.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{item.title}</div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
