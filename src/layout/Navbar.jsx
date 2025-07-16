import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PenBox, LogOut } from "lucide-react";
import { useFirebase } from "../context/Firebase";

const Navbar = () => {
  const firebase = useFirebase();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

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

  const user = firebase?.user;

  return (
    <header>
      <nav className="py-4 lg:py-6 px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-title1">
            ProjectPilot
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-x-6 text-white">
          <Link
            to="/home"
            className="text-base sm:text-lg hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base sm:text-lg hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base sm:text-lg hover:text-blue-400 transition"
          >
            Contact Us
          </Link>

          <Link to="/project">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition cursor-pointer">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </button>
          </Link>

          {/* User Dropdown */}
          {firebase?.isLoggedIn && (
            <div className="relative ml-2 cursor-pointer" ref={dropdownRef}>
              {/* Avatar */}
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    user?.email?.split("@")[0] || "User"
                  }&background=0D8ABC&color=fff`}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-52 bg-black border-2 border-gray-400 rounded-md shadow-md z-50">
                  <div
                    className="px-4 py-3 text-sm text-white font-medium border-b border-white/10 
              whitespace-normal break-words max-w-[12rem]"
                    title={user?.email}
                  >
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
      </nav>
    </header>
  );
};

export default Navbar;
