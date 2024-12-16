import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaBox, FaLeaf, FaPhone } from "react-icons/fa";
import "../components/css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section smoothly and update the active link
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Highlight active section based on scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ["home", "about", "product-sale", "carbon-credit", "contact"];
      const scrollPos = window.scrollY + 200; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav className="navbar">
      {/* Navbar Brand */}
      <div className="navbar-brand">
        <h1>GreenCredit</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {[
          { id: "home", icon: <FaHome />, label: "Home" },
          { id: "about", icon: <FaInfoCircle />, label: "About Us" },
          { id: "Product-sale", icon: <FaBox />, label: "Product Sale" },
          { id: "carbon-credit", icon: <FaLeaf />, label: "Carbon Credit" },
          { id: "contact", icon: <FaPhone />, label: "Contact Us" },
        ].map((link) => (
          <li
            key={link.id}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => handleScroll(link.id)}
          >
            {link.icon} <span style={{ marginLeft: "8px" }}>{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
