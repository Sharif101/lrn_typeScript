import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import DataTypePage from "./pages/DataTypePage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="data-type" element={<DataTypePage />} />
        <Route path="form-submission" element={<FormPage />} />
      </Route>
    </Routes>
  );
}

export default App;
