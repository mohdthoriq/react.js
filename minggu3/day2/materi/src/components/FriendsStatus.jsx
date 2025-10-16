import { useEffect, useState } from "react"
import useFriendStatus from "../hook/useFriendStatus";

// Komponen yang menggunakan Custom Hook
export default function FriendStatus({ friendId }) {
  const isOnline = useFriendStatus(friendId); // Menggunakan Custom Hook

  if (isOnline === null) {
    return 'Memuat...';
  }
  return isOnline ? 'Online' : 'Offline';
}

// Komponen lain yang menggunakan Custom Hook yang sama
function UserStatus() {
  // Kita bisa menggunakan useFriendStatus dengan ID dummy atau logika lain
  // untuk menunjukkan penggunaan kembali logika yang sama
  const isOnline = useFriendStatus(0); // Contoh: ID 0 untuk pengguna sendiri

  if (isOnline === null) {
    return 'Memuat status Anda...';
  }
  return isOnline ? 'Anda Online' : 'Anda Offline';
}