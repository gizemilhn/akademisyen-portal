// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom v6 için useNavigate

const Sidebar = ({ role }) => {
  const navigate = useNavigate(); // Yönlendirme için kullanıyoruz

  const handleLogout = () => {
    // Çıkış işlemi (Örneğin, localStorage'dan kullanıcı bilgilerini silip login sayfasına yönlendirme)
    navigate('/login'); // Giriş sayfasına yönlendirme
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-full fixed left-0 top-0 p-4"> {/* Sidebar'ı sabitliyoruz */}
      <h2 className="text-xl mb-4">Dashboard</h2>
      <ul>
        {role === 'admin' && (
          <>
            <li className="mb-2">İlan Yönetimi</li>
            <li className="mb-2">Başvuruları Görüntüle</li>
          </>
        )}
        {role === 'candidate' && (
          <>
            <li className="mb-2">Başvurduğum İlanlar</li>
            <li className="mb-2">Başvuru Durumum</li>
          </>
        )}
      </ul>
      <button
        onClick={handleLogout}
        className="w-full mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default Sidebar;
