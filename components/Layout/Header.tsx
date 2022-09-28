import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header >
      <div >
        <Link href="/">
          <a >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
          </a>
        </Link>
        <nav >
          {/* {user ? (
            <div >
              <Link href="/favorites">
                <a>
                  My Favorites
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a >
                  Logout
                </a>
              </Link>
              <img
                alt="profile"
                src={user.picture}
              />
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a >
                Login
              </a>
            </Link>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
