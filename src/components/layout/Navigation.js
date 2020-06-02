import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/tidyhive-standalone.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="items-center justify-between w-100 p-3 shadow-md tablet:flex fixed inset-x-0 bg-white z-40">
      <div className="flex items-center justify-between h-full tablet:block ">
        <Link className="flex items-center " to="/">
          <img
            src={logo}
            alt="Tidy Hive Logo"
            style={{ width: "auto", height: 50 }}
          />
          <h1>TidyHive</h1>
        </Link>
        <button
          aria-label="Navigation Menu"
          aria-expanded={isOpen}
          className="px-4 tablet:hidden"
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
        className={`${
          isOpen ? "block" : "hidden"
        } items-center justify-around h-full tablet:px-4 tablet:flex`}
        style={{ width: "350px" }}
        data-testid="isOpen"
      >
        <NavLink
          exact
          activeStyle={{ color: "rgb(255, 159, 28)" }}
          className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
          to="/"
          data-testid="home-link"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: "rgb(255, 159, 28)" }}
          className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
          to="/about"
          data-testid="about-link"
        >
          About
        </NavLink>
        <NavLink
          activeStyle={{ color: "rgb(255, 159, 28)" }}
          className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
          to="/contact"
          data-testid="contact-link"
        >
          Contact Us
        </NavLink>
        <NavLink
          activeStyle={{ color: "rgb(255, 159, 28)" }}
          className="block px-4 py-2 font-semibold tablet:inline text-1xl hover:text-hive hover:underline"
          to="/signin"
          data-testid="signin-link"
        >
          Signin
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
