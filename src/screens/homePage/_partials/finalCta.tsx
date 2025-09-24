import Link from "next/link";

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Justice?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of people who have successfully recovered their funds and found closure through our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/complaint"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start Your Complaint Now
          </Link>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
            Contact Our Team
          </button>
        </div>
        <p className="mt-4 text-blue-100">No registration required • 100% Free • Start immediately</p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
