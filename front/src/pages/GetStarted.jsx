import ChatInterface from "./ChatInterface";

const GetStarted = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to Islamic Finance GPT Assistant
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get expert guidance on Islamic finance products and services with
            our GPT assistant
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded border border-gray-800">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                Step 1: Ask a Question
              </h3>
              <p className="text-gray-400">
                Type your question or topic related to Islamic finance
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-800">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                Step 2: Get Expert Guidance
              </h3>
              <p className="text-gray-400">
                Our GPT assistant provides expert advice and guidance
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded border border-gray-800">
              <h3 className="text-lg font-bold text-orange-500 mb-2">
                Step 3: Make Informed Decisions
              </h3>
              <p className="text-gray-400">
                Use the guidance to make informed decisions about your financial
                products and services
              </p>
            </div>
          </div>

          <ChatInterface />
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
