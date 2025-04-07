import React, { useState } from "react";

const CandidateLoginForm = ({ onBack }) => {
  const [tcKimlik, setTcKimlik] = useState("");
  const [error, setError] = useState("");


  const validateTcKimlik = (e) => {
    const value = e.target.value;
    setTcKimlik(value);

    if (value.length !== 11 || !/^\d+$/.test(value)) {
      setError("TC Kimlik numarası 11 haneli olmalı ve sadece rakamlardan oluşmalı.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      alert("Lütfen formu kontrol ediniz.");
    }
  };

  return (
    <div>
      <h2 className="text-xl text-center font-semibold mb-4">Aday Girişi</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TC Kimlik Numarası"
          value={tcKimlik}
          onChange={validateTcKimlik}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>} 
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition">
            Geri
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateLoginForm;