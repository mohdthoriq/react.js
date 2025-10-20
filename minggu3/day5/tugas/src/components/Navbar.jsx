import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef, } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext); // Ambil konteks di sini
    const { user, isAuthenticated, logout } = useAuth();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);


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

    const handleLogout = () => {
        logout()
        closeMobileMenu(); // Menutup menu setelah logout
        navigate('/products', { replace: true })
    }

    const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

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
                    {isAuthenticated && user?.role === 'admin' && (
                        <li className="desktop-only">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    )}
                </ul>

                <div className="nav-right-section">
                    <div className="desktop-only">
                        {isAuthenticated && user ? ( // Jika sudah login
                            <>
                                <span className="text-sm mr-4">Hi, <strong>{user.name}</strong></span>
                                {user.role !== 'admin' && ( // Tombol logout hanya untuk user biasa
                                    <button onClick={handleLogout} style={{
                                        backgroundColor: '#dc2626',
                                        border: '1px solid #dc2626',
                                        color: '#ffff',
                                        marginRight: '1rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '0.375rem',
                                        fontSize: '0.875rem',
                                        transitionProperty: 'background-color, color',
                                        transitionDuration: '200ms',
                                        cursor: 'pointer',
                                    }}>
                                        Logout
                                    </button>

                                )}
                            </>
                        ) : (

                            null
                        )}

                        <ThemeToggleButton />
                    </div>
                    <div className="mobile-only">
                        {isAuthenticated && (

                            <button ref={buttonRef} onClick={toggleMobileMenu} className="profile-menu-button">
                                <div className="profile-icon"></div>
                            </button>)}
                    </div>
                </div>
            </nav >
            {isMobileMenuOpen && (
                <div ref={menuRef} className="mobile-menu">
                    <ul>
                        {isAuthenticated && user?.role === 'admin' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/profile" onClick={closeMobileMenu}>Profil</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/settings" onClick={closeMobileMenu}>Pengaturan</NavLink>
                                </li>
                            </>
                        )}
                        {/* Tombol Logout untuk semua user yang login */}
                        {isAuthenticated && user?.role !== 'admin' && (
                            <li>
                                <button onClick={handleLogout} className="w-full text-left text-red-600 px-4 py-2 rounded hover:bg-red-500/10 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>

                                    <span>Logout</span>
                                </button>
                            </li>
                        )}

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