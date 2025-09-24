import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fight Back Against
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Fraudulent Vendors</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get the justice you deserve. Our platform helps you report, track, and resolve cases
              against scam artists with transparency and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/complaint"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 text-center"
              >
                Report a Complaint Now
              </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-400 transition-colors">
                See Live Cases
              </button>
            </div>
            <div className="flex items-center mt-8 space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-green-500 text-lg mr-1">✓</span>
                100% Free Service
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-lg mr-1">✓</span>
                Transparent Process
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl mb-6">
                <h3 className="font-semibold text-lg">Live Case Updates</h3>
              </div>
              <div className="space-y-4">
                {[
                  { id: "VDM-001", vendor: "TechGadgets Inc", amount: "$500", status: "Under Review" },
                  { id: "VDM-002", vendor: "QuickLoan Services", amount: "$1,200", status: "Evidence Gathering" },
                  { id: "VDM-003", vendor: "ElitePharma", amount: "$750", status: "Resolved" },
                ].map((caseItem) => (
                  <div key={caseItem.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{caseItem.id}</div>
                      <div className="text-sm text-gray-600">{caseItem.vendor}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{caseItem.amount}</div>
                      <div
                        className={`text-sm ${
                          caseItem.status === "Resolved"
                            ? "text-green-600"
                            : caseItem.status === "Under Review"
                            ? "text-blue-600"
                            : "text-orange-600"
                        }`}
                      >
                        {caseItem.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View All Cases →
                </button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
