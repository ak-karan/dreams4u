import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogNotFound() {
  return (
    <>
      <Helmet>
        <title>404 Blog Not Found | Dreams4U</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://dreams4u.in/blog" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or may have been moved.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/blog" className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse Blogs
            </Link>
            <Link to="/" className="btn-outline">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
