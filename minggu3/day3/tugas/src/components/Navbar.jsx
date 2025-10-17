import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-gray-800 p-4 rounded-lg">
      <Link className="hover:text-yellow-400 transition-all" to="/">Home</Link>
      <Link className="hover:text-yellow-400 transition-all" to="/about">About</Link>
      <Link className="hover:text-yellow-400 transition-all" to="/contact">Contact</Link>
    </nav>
  );
}
