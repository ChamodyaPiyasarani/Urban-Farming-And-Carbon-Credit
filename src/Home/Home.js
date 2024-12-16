import React, { useState } from "react";
import Navbar from "./Navbar"; // Ensure Navbar is in the correct path
import "../components/css/Home.css"; // Make sure the path to CSS is correct
import { FaLeaf } from "react-icons/fa";
import image from 'C:/Users/user/Desktop/New folder/again-app/src/assets/image.png';
import { useNavigate } from "react-router-dom";


import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
  const [visibleProducts, setVisibleProducts] = useState(6); // State for visible products
  const navigate = useNavigate();


  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 6); // Increase visible count by 6
  };

  const products = [
    {
      id: 1,
      name: "Smart Planter",
      price: "LKR 5400",
      rating: 4,
      favorite: false,
      image: "https://m.media-amazon.com/images/I/61eRz9edJGL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "Hanging Basket",
      price: "LKR 550",
      rating: 4.5,
      favorite: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurJHs0LsjrD0OcuTpdGxFmpfCA2_Ty61sxA&s",
    },
    {
      id: 3,
      name: "Biodegradable Plant Pots",
      price: "LKR 250",
      rating: 4,
      favorite: false,
      image: "https://www.coopersofstortford.co.uk/images/products/medium/L092i.jpg",
    },
    {
      id: 4,
      name: "Spray Bottle",
      price: "LKR 450",
      rating: 5,
      favorite: true,
      image: "https://www.ido.lk/wp-content/uploads/2022/03/3L-Hand-Pressure-Water-Spray-Bottle@ido.lk_.jpg",
    },
  ];

return (
    <div>
      <Navbar />
 {/* Home Section */}
    <div id="home" className="home-section">
      <div className="content">
        <h1>"Empowering Urban Farming & Sustainability through Carbon Credits."</h1>
        <p>Join a community dedicated to urban farming, sustainability, and carbon credit trading.</p>
        <button className="cta-btn" onClick={() => navigate("/login")}>
          <FaLeaf /> Join with Us
        </button>
      </div>
    </div>

    {/* About Section */}
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h2>About Us</h2>
          <p>
            At <b>GreenCredit</b>, we are dedicated to creating a sustainable future through innovative solutions in
            urban farming and environmental responsibility. Our focus is on promoting green practices that make a real
            impact on our planet's health.
          </p>
          <p>
            We are also committed to supporting carbon credit trading, helping businesses and individuals offset their
            carbon emissions. Through this, we empower our community to actively participate in reducing environmental
            footprints and fostering a greener future.
          </p>
          <p>
            Join us as we work towards a world where sustainability and urban farming thrive together, creating
            positive change for both the environment and communities.
          </p>
          <button className="learn-more-button" onClick={() => window.location.href = "/our-projects"}>
            Learn More
          </button>
        </div>
        <div className="image-content">
          <img src={image} alt="About Us Image" />
        </div>
      </div>
    </div>
   {/* Product Sale Section */}
      <div id="Product-sale" className="section">
        <h2>Product Sale</h2>
        <div className="product-grid">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="product-rating">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              {product.favorite && <span className="favorite">&hearts;</span>}
              <button className="add-cart-btn">Add To Cart</button>
            </div>
          ))}
        </div>
        <p>Discover a wide range of innovative and sustainable products designed for urban living. From tech gadgets to smart solutions for daily life, we've got something for everyone.</p>
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
    </div>
    {/* Carbon Credit Section */}
    <div id="carbon-credit" className="section">
            <div className="background-container">
              <div className="content">
                <h2>Carbon Credit for a Greener Future</h2>
                <p>
                  Carbon credits allow businesses and individuals to offset their carbon emissions by supporting environmental
                  projects like urban farming, reforestation, and renewable energy. By participating in carbon credit trading,
                  you contribute to projects that absorb or reduce carbon emissions, helping the planet recover from the adverse
                  effects of climate change.
                </p>
                <p>
                  Through the purchase of carbon credits, individuals and organizations can compensate for their carbon emissions,
                  making a tangible difference in the fight against global warming. Carbon credits can also support green urban farming
                  initiatives that promote local food production while preserving ecosystems.
                </p>
                <button
                    className="learn-more-button"
                    onClick={() => (window.location.href = "/carbon-calculation")}>
                    Learn More
                </button>
              </div>
            </div>
        </div>


      <section id="contact">
      <h2>Contact Us</h2>
      <p>We would love to hear from you. Feel free to reach out with any questions, concerns, or feedback!</p>
      
      {/* Contact Form */}
      <div className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <p>+1 800 123 456</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>contact@company.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>123 Street, City, Country</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </section>
      
    </div>
  );
};

export default Home;
