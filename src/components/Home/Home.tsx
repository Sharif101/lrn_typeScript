import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Choose an Example
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <Link to="/data-type" className="flex-1">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Simple Data Type
            </button>
          </Link>
          <Link to="/form-submission" className="flex-1">
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
              Form Submission
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/todo" className="flex-1">
            <button className="w-full bg-zinc-600 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition duration-200">
              Todo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
