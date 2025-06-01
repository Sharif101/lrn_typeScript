import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <p className="text-2xl font-bold text-blue-6002">
        Vite + React + TypeScript
      </p>
      <Outlet />
    </div>
  );
}
