import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import LearnMore from "./components/LearnMore";
import Report from "./components/Report";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/report" element={<Report />} />
      </Routes>

      {/* Toast container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: { background: "green", color: "white" },
          },
          error: {
            style: { background: "red", color: "white" },
          },
        }}
      />
    </>
  );
}

export default App;
