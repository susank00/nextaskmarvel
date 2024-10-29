"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on resize if screen is above 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold uppercase tracking-widest hover:text-yellow-400 transition duration-300"
        >
          Marvel Universe
        </Link>

        {/* Hamburger Icon for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link
            href="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About Marvel
          </Link>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-2/4 bg-blue-900 text-white z-20 p-6 shadow-lg">
            <button
              onClick={toggleMenu}
              className="text-white mb-4 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-5">
              <Link
                href="/"
                className="block text-lg hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-lg hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Marvel
              </Link>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
