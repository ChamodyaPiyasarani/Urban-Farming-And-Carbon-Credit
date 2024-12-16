import React, { useState } from "react";
import "../components/css/Shop.css"; // Link to your CSS file for styling

const Shop = () => {
  const [cart, setCart] = useState([]);

  // List of products
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
      name: "Herb Growing Kit",
      price: "LKR 4500",
      rating: 5,
      favorite: false,
      image: "https://c02.purpledshub.com/uploads/sites/40/2022/04/Screenshot-2022-04-28-at-12.49.26-e327320.jpg",
    },
    {
      id: 3,
      name: "Self-Watering Planters",
      price: "LKR 7000",
      rating: 4,
      favorite: false,
      image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b2746f19-d12c-4756-98a0-0381515c112d.__CR0,0,300,300_PT0_SX300_V1___.jpg",
    },
    {
      id: 4,
      name: "Organic Soil Mix",
      price: "LKR 3500",
      rating: 5,
      favorite: false,
      image: "https://www.espoma.com/wp-content/uploads/2018/12/AP8.jpg-1030x1030.jpg",
    },
    {
      id: 5,
      name: "Urban Farming Guide",
      price: "LKR 2000",
      rating: 4,
      favorite: false,
      image: "https://unity.edu/wp-content/uploads/2023/03/Urban-Farming-scaled.jpg",
    },
    {
      id: 6,
      name: "Composting Bin",
      price: "LKR 10000",
      rating: 3,
      favorite: false,
      image: "https://getcomposting.com/cdn/shop/products/Shopify_Products_GC_BlackwallComposter220lGreen.jpg?v=1655468512",
    },
    {
      id: 7,
      name: "Seed Starter Pack",
      price: "LKR 2500",
      rating: 5,
      favorite: false,
      image: "https://img.drz.lazcdn.com/static/lk/p/fa62f99e0591da7a8d53a84b0c1caceb.jpg_720x720q80.jpg",
    },
    {
      id: 8,
      name: "Vertical Garden Kit",
      price: "LKR 15000",
      rating: 4,
      favorite: false,
      image: "https://m.media-amazon.com/images/I/61fnNe+XqUL.jpg",
    },
    {
      id: 9,
      name: "LED Grow Lights",
      price: "LKR 12000",
      rating: 5,
      favorite: false,
      image: "https://36vine.com/s/img/wp-content/uploads/2023/12/Full-Spectrum-LED-Grow-Lights.webp",
    }
    // {
    //   id: 10,
    //   name: "Gardening Tools Set",
    //   price: "LKR 6000",
    //   rating: 4,
    //   favorite: false,
    //   image: "https://m.media-amazon.com/images/I/81g-Cv4E8wL._AC_SL1500_.jpg",
    // },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div id="Product-sale">
      <h2>Urban Farming Products</h2>
      <p>Discover the best tools and products for your sustainable farming journey.</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-rating">
              {"⭐".repeat(product.rating)} {product.rating}/5
            </div>
            <button className="add-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
