import React, { useEffect, useState } from "react";
import CatMusic from "./assets/CatMusic.mp3";

const Cat = () => {
  const [audio] = useState(new Audio(CatMusic));

  useEffect(() => {
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAudio();
      } else {
        playAudio();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      pauseAudio();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [audio]);

  function playAudio() {
    audio.currentTime = 0;
    audio.volume = 0.8;
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  return (
    <div>
      <div className="h-screen w-full ">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzlsMTRyOGVpNWZ0enlwbXVhcXhnaHZ4NmZ2d2p0cnB6eGx5N3VvaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7giwossH9HVSmjEfMt/giphy.gif"
          alt="cat"
          className="h-full w-full object-contain  top"
        />
        <div className="fixed -mt-10 ml-4">
          Music Credit: CAts - The living tombstone
        </div>
      </div>
    </div>
  );
};

export default Cat;
