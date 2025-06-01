import "./App.css";
import ExampleTs from "./components/ExampleTs/ExampleTs";
import ExampleTsV2 from "./components/ExampleTs/ExampleTsV2";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full">
        <p className="text-2xl font-bold text-blue-600 mb-4">
          Vite + React + TypeScript
        </p>
        <ExampleTs />
        <ExampleTsV2 />
      </div>
    </div>
  );
}

export default App;
