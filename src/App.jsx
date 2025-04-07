import React, { useState } from "react";
import "./index.css";
import logo from "./assets/logo.png";
import AdminLoginForm from "./components/AdminLoginForm";
import CandidateLoginForm from "./components/CandidateLoginForm";

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleBack = () => setSelectedRole(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6">

        
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
        </div>
        <div className="flex justify-center mb-1">
        <h1 className="text-gray-900 text-2xl font-semibold">KOCAELİ ÜNİVERSİTESİ</h1>
        </div>
        <div className="flex justify-center mb-6">
          <h1 className="text-gray-900 text-xl font-base">AKADEMİK PERSONEL BAŞVURU SİSTEMİ</h1>
        </div>

        {/* Seçim ve Formlar */}
        {selectedRole === null ? (
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
        ) : selectedRole === "admin" ? (
          <AdminLoginForm onBack={handleBack} />
        ) : (
          <CandidateLoginForm onBack={handleBack} />
        )}
      </div>
    </div>
  );
};
export default App;
