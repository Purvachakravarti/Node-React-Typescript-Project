import { Routes, Route } from "react-router-dom";
import DashboradPage from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/invoices" element={<DashboradPage />} />
    </Routes>
  );
};

export default App;
