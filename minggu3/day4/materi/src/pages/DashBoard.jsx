import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Outlet dan Link

function Dashboard() {
  return (
    <div>
      <h2>Halaman Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="profile">Profil Saya</Link></li> {/* Relatif ke /dashboard */}
          <li><Link to="settings">Pengaturan</Link></li> {/* Relatif ke /dashboard */}
        </ul>
      </nav>
      <hr />
      {/* Outlet akan me-render komponen dari nested route yang cocok */}
      <Outlet />
    </div>
  );
}
export default Dashboard;

