const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1,247+", label: "Cases Resolved" },
            { number: "$350K+", label: "Recovered Funds" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Active Support" },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
