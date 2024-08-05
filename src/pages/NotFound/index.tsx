import { Link } from "react-router-dom"
import Button from "../../components/UI/Button"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 bg-gray-100 p-6">
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
          <Link to="/">
            <Button variant="primary">Go to Homepage</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
