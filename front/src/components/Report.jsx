import Axios from "axios";
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  AlertCircle,
  Send,
  CheckCircle,
  ArrowBigLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Report = () => {
  const [reportData, setReportData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Invalid email address" : "",
      }));
    }

    if (name === "message") {
      setErrors((prev) => ({
        ...prev,
        message: value.trim() === "" ? "Message is required" : "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !reportData.email ||
      !reportData.message ||
      errors.email ||
      errors.message
    ) {
      toast.error("Please fill out the form correctly.");
      return;
    }

    try {
      setIsSubmitting(true);
      await Axios.post("https://islamic-ai-ncdk.onrender.com/api/v1/report", reportData);
      setReportData({ email: "", message: "" });
      toast.success("Report sent successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Error sending report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      {/* Back Button */}
      <div className="px-4 pt-8">
        <button
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition mx-auto sm:mx-0"
          onClick={() => navigate(-1)}
        >
          <ArrowBigLeft size={24} />
          <span className="text-lg font-semibold">Go Back</span>
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-gray-900/60 backdrop-blur border border-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-[95vw] max-w-xl mx-auto mt-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 flex items-center gap-2">
          <AlertCircle className="text-orange-400 w-6 h-6" />
          Report an Issue
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium flex items-center gap-1 text-white mb-2"
            >
              <Mail size={18} className="text-orange-400" />
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={reportData.email}
              onChange={handleInputChange}
              className={`w-full bg-black border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-sm font-medium flex items-center gap-1 text-white mb-2"
            >
              <MessageSquare size={18} className="text-orange-400" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={reportData.message}
              onChange={handleInputChange}
              className={`w-full bg-black border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition`}
              placeholder="Describe the issue..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            ) : (
              <Send size={18} />
            )}
            {isSubmitting ? "Sending..." : "Send Report"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;
