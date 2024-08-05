import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          It might have been moved or deleted. Please check the URL or return to
          the homepage.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/"
            className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
          >
            Go to Homepage
          </Link>
          <Link
            to="/contact"
            className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
