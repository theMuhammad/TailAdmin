import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/Home";
import Mahsulotlar from "./pages/Mahsulotlar";
import Magazine from "./pages/Magazine";
import Omborxona from "./pages/Omborxona";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        <Dashboard />

        <div className="flex-1 bg-gray-100 p-4 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mahsulotlar" element={<Mahsulotlar />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/omborxona" element={<Omborxona />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;