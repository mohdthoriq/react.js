import { useEffect, useState } from "react";

function UserStatus() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // Logika yang sama persis dengan FriendStatus
    const checkStatus = () => {
      const status = Math.random() > 0.5 ? true : false; // Contoh sederhana
      setIsOnline(status);
    };

    checkStatus()
    const intervalId = setInterval(checkStatus, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isOnline === null) {
    return 'Memuat status Anda...';
  }
  return isOnline ? 'Anda Online' : 'Anda Offline';
}

export default UserStatus;