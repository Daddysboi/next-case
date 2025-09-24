const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about NextCase</p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "Is NextCase completely free to use?",
              answer: "Yes, our platform is 100% free for victims seeking justice. We believe everyone deserves access to fair dispute resolution without financial barriers.",
            },
            {
              question: "How long does it typically take to resolve a case?",
              answer: "Most cases are resolved within 3-7 days. Complex cases may take up to 2 weeks. We provide real-time updates throughout the process.",
            },
            {
              question: "What types of cases can I submit?",
              answer: "We handle various cases including online fraud, vendor disputes, service issues, financial scams, and more. If you've been wronged, we can help.",
            },
            {
              question: "Is my personal information safe with NextCase?",
              answer: "Absolutely. We use military-grade encryption and strict privacy protocols. Your personal details are never shared without your explicit consent.",
            },
            {
              question: "Can I track the progress of my case?",
              answer: "Yes! Our transparent tracking system lets you see every step of your case in real-time, from submission to resolution.",
            },
            {
              question: "What makes NextCase different from other platforms?",
              answer: "We combine community power with professional oversight, ensuring both grassroots support and expert guidance for the best possible outcomes.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
