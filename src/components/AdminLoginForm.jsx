import React from "react";

function AdminLoginForm({ onBack }) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Yönetici Girişi</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition"
          >
            Geri
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }
  
  export default AdminLoginForm;
  