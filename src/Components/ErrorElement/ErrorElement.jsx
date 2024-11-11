import { Link } from "react-router-dom";


const ErrorElement = () => {
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h1 className="text-6xl font-bold text-blue-600 mb-4 animate-bounce">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to={'/'}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
        );
      };

export default ErrorElement;