import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import logo from '../../assets/images/tidyhive-standalone.png';
import { useLocation } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Navigation = () => {
  function useOutside(ref) {
    useEffect(() => {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutside(wrapperRef);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    setIsOpen(false);
    localStorage.removeItem('token');
    localStorage.removeItem('state');
    history.push('/signin');
  };

  return (
    <header className="fixed inset-x-0 z-40 items-center justify-between p-3 bg-white shadow-md w-100 tablet:flex">
      <div className="flex items-center justify-between h-full tablet:block ">
        <Link className="flex items-center " to="/">
          <img
            src={logo}
            alt="Tidy Hive Logo"
            style={{ width: 'auto', height: 50 }}
          />
          <h1>TidyHive</h1>
        </Link>
        <button
          aria-label="Navigation Menu"
          aria-expanded={isOpen}
          className="px-4 tablet:hidden "
          //TODO fix onClick bug
          onClick={() => setIsOpen(!isOpen)}
          data-testid="nav-button"
        >
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        ref={isOpen ? wrapperRef : null}
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full text-right items-center justify-end w-full   tablet:m-0  tablet:px-4 tablet:flex`}
        data-testid="isOpen"
      >
        {(location.pathname === '/' ||
          location.pathname === '/signin' ||
          location.pathname === '/signup' ||
          location.pathname === '/about' ||
          location.pathname === '/contact') && (
          <>
            <NavLink
              exact
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/"
              data-testid="home-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/about"
              data-testid="about-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/contact"
              data-testid="contact-link"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/signin"
              data-testid="signin-link"
              onClick={() => setIsOpen(false)}
            >
              Signin
            </NavLink>
          </>
        )}
        {(location.pathname === '/dashboard' ||
          location.pathname === '/household' ||
          location.pathname === '/account') && (
          <>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/dashboard"
              data-testid="dashboard-link"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/household"
              onClick={() => setIsOpen(false)}
              data-testid="household-link"
            >
              Household
            </NavLink>
            <NavLink
              activeStyle={{ color: 'rgb(255, 159, 28)' }}
              className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
              to="/account"
              onClick={() => setIsOpen(false)}
              data-testid="account-link"
            >
              Account
            </NavLink>
            <GoogleLogout
              clientId="1050964061778-o501f0usfcgqtapvsmhvs89eebtndv9m.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
              className="w-full h-10 px-2 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:w-1/2"
              render={(renderProps) => (
                <button
                  className="h-auto px-4 py-2 mr-2 font-semibold text-white rounded-md tablet:mr-0 tablet:ml-2 bg-hive hover:bg-orange-500"
                  data-testid="logout-test"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  This is my custom Google button
                </button>
              )}
            ></GoogleLogout>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
