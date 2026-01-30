import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <div className="text-9xl font-bold text-cyan-600/20">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 ml-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white/50 rounded-2xl backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Services", "Portfolio", "Contact", "About"].map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
