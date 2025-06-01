import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full">
          <div className="space-x-4">
            <Link to="/data-type">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Simple Data Type
              </button>
            </Link>
            <Link to="/form-submission">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                Form Submission
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
