import React, { useState } from "react";

export default function FavNotifi() {
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToFavorites = () => {
    // Show notification
    setShowNotification(true);

    // Hide after 1 second
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToFavorites}
        className="py-2 px-4 bg-blue-600 text-white rounded-lg"
      >
        Add to Favourites
      </button>

      {showNotification && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-md">
          Added to Favourites
        </div>
      )}
    </div>
  );
}
