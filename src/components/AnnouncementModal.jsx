// src/components/AnnouncementModal.jsx
import React from 'react';

const AnnouncementModal = ({ announcement, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h3 className="font-bold text-lg mb-4">{announcement.title}</h3>
        <p>{announcement.content}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Kapat
          </button>
          <button
            onClick={() => alert("Başvuru Sayfasına Yönlendirileceksiniz.")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Başvuru Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
