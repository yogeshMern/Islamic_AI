import { Globe, Rocket, HelpCircle } from "lucide-react";
import content from "../data/learnMoreContent.json";

const LearnMore = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white font-sans">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            {content.intro.title}
          </h2>

          {/* Intro Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Relevance Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <Globe className="text-orange-400" size={28} />
              {content.relevance.title}
            </h2>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-md">
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {content.relevance.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <Rocket className="text-orange-400" size={28} />
              {content.useCases.title}
            </h2>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-md">
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {content.useCases.points.map((useCase, idx) => (
                  <li key={idx}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <HelpCircle className="text-orange-400" size={28} />
              {content.faq.title}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {content.faq.questions.map((faqItem, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-400 transition"
                >
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">
                    Q: {faqItem.question}
                  </h3>
                  <p className="text-gray-300">A: {faqItem.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
