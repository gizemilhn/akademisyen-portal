// src/components/HomePage.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AnnouncementModal from './AnnouncementModal';

const announcements = [
  {
    id: 1,
    title: "Yeni İlan Yayınlandı!",
    content: "Dr. Öğr. Üyesi pozisyonu için başvurular başlamıştır. Son başvuru tarihi 30 Nisan 2025'tir.",
  },
  {
    id: 2,
    title: "Başvuru Tarihleri Uzatıldı",
    content: "Doçent kadrosu için başvuru tarihi 15 Mayıs 2025'e kadar uzatılmıştır.",
  },
];

const HomePage = ({ role }) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);  
  };

  const handleCloseModal = () => {
    setSelectedAnnouncement(null); 
  };

  return (
    <div className="flex">
      <Sidebar role={role} />
      
      <div className="flex-1 p-6 ml-64"> {/* Sidebar genişliğini hesaba katıyoruz */}
        <h1 className="text-2xl font-bold mb-4">Hoşgeldiniz, {role === 'candidate' ? 'Aday' : 'Admin'}!</h1>

        {/* Duyuru Tablosu */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-semibold text-lg mb-4">Duyurular</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Başlık</th>
                <th className="border px-4 py-2">Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement.id}>
                  <td className="border px-4 py-2">{announcement.title}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleAnnouncementClick(announcement)}
                      className="text-blue-600 hover:underline"
                    >
                      Detayları Gör
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedAnnouncement && (
          <AnnouncementModal
            announcement={selectedAnnouncement}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
