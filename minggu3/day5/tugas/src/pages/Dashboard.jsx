import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar desktop-only">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profil</NavLink>
                        </li>
                        <li>
                            <NavLink to="settings" className={({ isActive }) => (isActive ? 'active' : '')}>Pengaturan</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
}