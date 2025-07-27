import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PenBox, LogOut, Menu, X } from "lucide-react";
import { useFirebase } from "../context/Firebase";

const Navbar = () => {
  const firebase = useFirebase();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = firebase?.user;

  const handleLogout = async () => {
    await firebase.signOutUser();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-transparent text-white z-50">
      <nav className="py-4 lg:py-6 px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/home">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-title1">
            ProjectPilot
          </h1>
        </Link>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-x-6 text-white">
          <Link to="/home" className="text-base sm:text-lg hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="text-base sm:text-lg hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/contact" className="text-base sm:text-lg hover:text-blue-400 transition">
            Contact Us
          </Link>

          <Link to="/project">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition cursor-pointer">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </button>
          </Link>

          {firebase?.isLoggedIn && (
            <div className="relative ml-2 cursor-pointer" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    user?.email?.split("@")[0] || "User"
                  }&background=0D8ABC&color=fff`}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-52 bg-black border-2 border-gray-400 rounded-md shadow-md z-50">
                  <div className="px-4 py-3 text-sm text-white font-medium border-b border-white/10 whitespace-normal break-words max-w-[12rem]" title={user?.email}>
                    {user?.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 text-left px-4 py-2 text-red-500 hover:bg-red-600 hover:text-white text-sm"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col gap-4 py-4 px-6 lg:hidden z-40 shadow-md">
            <Link to="/home" onClick={() => setShowMobileMenu(false)} className="text-white hover:text-blue-400">
              Home
            </Link>
            <Link to="/about" onClick={() => setShowMobileMenu(false)} className="text-white hover:text-blue-400">
              About
            </Link>
            <Link to="/contact" onClick={() => setShowMobileMenu(false)} className="text-white hover:text-blue-400">
              Contact Us
            </Link>

            <Link to="/project" onClick={() => setShowMobileMenu(false)}>
              <button className="w-full flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
                <PenBox size={18} />
                Create Project
              </button>
            </Link>

            {firebase?.isLoggedIn && (
              <div className="text-white">
                <div className="mb-2 text-sm">{user?.email}</div>
                <button
                  onClick={() => {
                    setShowMobileMenu(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-2 text-red-500 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
