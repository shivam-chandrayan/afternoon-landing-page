"use client";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-screen z-50">
      <div className="px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center 2xl:pt-4 justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <a href="/">
                <img
                  className="h-8 xl:h-10 2xl:h-12 w-auto"
                  src="/logo with name.svg"
                  alt="Afternoon co"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm xl:text-lg font-medium text-font-primary hover:underline"
                >
                  About
                </a>
                <a
                  href="https://www.afternoon.co/login"
                  className="rounded-md px-3 py-2 text-sm xl:text-lg font-medium text-font-primary hover:underline"
                >
                  Login
                </a>
                {/* CTA Button */}
                <a
                  href="https://cal.com/team/afternoon.co/demo"
                  className="px-4 py-2 text-white xl:text-lg bg-primary hover:bg-font-primary"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-white h-screen">
            <a
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-font-secondary"
            >
              About
            </a>
            <a
              href="https://www.afternoon.co/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-font-secondary"
            >
              Login
            </a>
            {/* CTA Button */}
            <a
              href="https://cal.com/team/afternoon.co/demo"
              className="block px-4 py-2 my-2 text-white bg-primary hover:bg-primary-dark"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
