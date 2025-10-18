import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext); // Ambil konteks di sini
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            // Tutup menu jika klik terjadi di luar menu DAN di luar tombol
            if (
                menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        }

        // Tambahkan event listener saat menu terbuka
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Hapus event listener saat komponen unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, buttonRef]); // Dependensi memastikan fungsi selalu up-to-date

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="desktop-only">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-right-section">
                    <div className="desktop-only">
                        <ThemeToggleButton />
                    </div>
                    <div className="mobile-only">
                        <button ref={buttonRef} onClick={toggleMobileMenu} className="profile-menu-button">
                            {/* Ikon profil sederhana menggunakan div */}
                            <div className="profile-icon"></div>
                        </button>
                    </div>
                </div>
            </nav >
            {isMobileMenuOpen && (
                <div ref={menuRef} className="mobile-menu">
                    <ul>
                        <li>
                            <NavLink to="/dashboard/profile" onClick={closeMobileMenu}>Profil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/settings" onClick={closeMobileMenu}>Pengaturan</NavLink>
                        </li>
                        <li className="mobile-theme-toggle">
                           <span>Ganti Tema</span>
                           <label className="switch">
                                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                                <span className="slider round"></span>
                           </label>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
 
    return (
        <label className="switch" aria-label="Ganti tema">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className="slider round"></span>
        </label>
    );
}