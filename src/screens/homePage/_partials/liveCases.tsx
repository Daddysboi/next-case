const LiveCasesSection = () => {
  return (
    <section id="cases" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Case Examples</h2>
          <p className="text-xl text-gray-600">Real cases showing our transparent process</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 text-xl">Active Cases</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                id: "JH-8472",
                title: "Online Shopping Fraud",
                amount: "$450",
                status: "Active",
                update: "2 hours ago - Evidence under review",
                resolution: "3-5 days",
              },
              {
                id: "JH-8471",
                title: "Real Estate Scam",
                amount: "$5,200",
                status: "Under Review",
                update: "1 day ago - Legal team assigned",
                resolution: "1-2 weeks",
              },
              {
                id: "JH-8470",
                title: "Investment Fraud",
                amount: "$12,000",
                status: "Resolved",
                update: "3 days ago - Funds recovered",
                resolution: "Completed",
              },
            ].map((caseItem, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-lg">
                    {caseItem.id} - {caseItem.title}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      caseItem.status === "Resolved"
                        ? "text-green-600"
                        : caseItem.status === "Active"
                        ? "text-blue-600"
                        : "text-orange-600"
                    }`}
                  >
                    ● {caseItem.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Involved</span>
                    <span className="font-medium">{caseItem.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Update</span>
                    <span>{caseItem.update}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Resolution</span>
                    <span>{caseItem.resolution}</span>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-medium">Evidence Submitted</span>
                    <span className="flex space-x-1">
                      {[1, 2, 3].map((star) => (
                        <span key={star} className="text-blue-500">
                          ✓
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCasesSection;
