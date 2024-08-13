/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-gray-300 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img
              className="h-8 w-auto"
              src=""
              alt=""
            /> */}
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Capture Rings
            </h1>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="flex lg:hidden">
          {isOpen ? (
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          <li>
            <Link
              to="/"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primaryBtn"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="relative z-50 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {isOpen && (
              <div className="bg-gray-300 rounded-b-xl">
                <div className="flow-root px-6 py-6">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Home
                      </a>
                      <a
                        href="/booking"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Bookings
                      </a>
                      <a
                        href="/contact"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Contact
                      </a>
                      <a
                        href="/about"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        About Us
                      </a>
                      <a
                        href="/blog"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Blog
                      </a>
                      <a
                        href="/gallery"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Gallery
                      </a>
                      <a
                        href="/shop"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Shop
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primaryBtn"
                      >
                        Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
