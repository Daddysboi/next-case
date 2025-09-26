const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why NextCase</h2>
          <p className="text-xl text-gray-600">Track Record with powerful features designed to help you fight back</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "🔒",
              title: "Complete Privacy & Security",
              description: "Your personal information is protected with enterprise-grade security measures and end-to-end encryption.",
            },
            {
              icon: "⚡",
              title: "Lightning Fast Processing",
              description: "Average case resolution time of 3-7 days with real-time updates and notifications.",
            },
            {
              icon: "👥",
              title: "Community Power",
              description: "Leverage collective intelligence and support from thousands of community members.",
            },
            {
              icon: "📊",
              title: "Transparent Tracking",
              description: "Know exactly where your case stands at every step with our real-time tracking system.",
            },
            {
              icon: "🛡️",
              title: "Expert Support",
              description: "Get guidance from experienced professionals who understand your situation.",
            },
            {
              icon: "🌐",
              title: "Global Reach",
              description: "We handle cases from around the world with localized support and understanding.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex space-x-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
