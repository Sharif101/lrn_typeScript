import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <p className="text-3xl font-bold text-blue-600">
          Vite + React + TypeScript
        </p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
