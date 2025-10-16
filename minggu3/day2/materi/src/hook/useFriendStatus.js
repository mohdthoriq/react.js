import { useEffect, useState } from "react";

export default function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      // Logika kompleks untuk memeriksa status online
      // Bisa berupa panggilan API, WebSocket, dll.
      const status = friendId % 2 === 0 ? true : false; // Contoh sederhana
      setIsOnline(status);
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [friendId]); // Dependensi: friendId

  return isOnline; // Mengembalikan nilai state
}
