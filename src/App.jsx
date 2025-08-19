
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateApartment from "./pages/CreateApartment";
import ApartmentDetail from "./pages/ApartmentDetail";
import EditApartment from "./pages/EditApartment";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex flex-1 flex-col md:flex-row">
          <Sidebar />

          <main className="flex-1 p-6 bg-gray-50 min-h-[calc(100vh-8rem)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateApartment />} />
              <Route path="/apartments/:id" element={<ApartmentDetail />} />
              <Route path="/edit/:id" element={<EditApartment />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
