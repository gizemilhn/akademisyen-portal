// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./index.css";
import logo from "./assets/logo.png";
import AdminLoginForm from "./components/AdminLoginForm";
import CandidateLoginForm from "./components/CandidateLoginForm";
import HomePage from "./components/HomePage";  

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleBack = () => setSelectedRole(null);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sol tarafta Sidebar'ı yerleştiriyoruz */}
        <div className="w-64 bg-gray-800 text-white p-4"> {/* Sidebar */}
          <div className="text-xl font-bold mb-6">Dashboard</div>
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Settings</li>
          </ul>
        </div>

        {/* Sağdaki içerik alanı */}
        <div className="flex-1 p-6 ml-64"> {/* Sidebar genişliğini hesaba katıyoruz */}
          <Routes>
            <Route path="/" element={
              selectedRole === null ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedRole("admin")}
                    className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Yönetici Girişi
                  </button>
                  <button
                    onClick={() => setSelectedRole("candidate")}
                    className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Aday Girişi
                  </button>
                </div>
              ) : selectedRole === "admin" || selectedRole === "candidate" ? (
                <HomePage role={selectedRole} />
              ) : (
                <div>Invalid role</div>
              )
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
