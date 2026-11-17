
import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, oldPrice: 3999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", rating: 4.5 },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 1999, oldPrice: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", rating: 4.3 },
  { id: 3, name: "Running Shoes", category: "Fashion", price: 1799, oldPrice: 2499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", rating: 4.4 },
  { id: 4, name: "Travel Backpack", category: "Accessories", price: 1299, oldPrice: 1999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", rating: 4.2 },
  { id: 5, name: "Camera", category: "Electronics", price: 15999, oldPrice: 18999, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", rating: 4.8 },
  { id: 6, name: "Sunglasses", category: "Fashion", price: 899, oldPrice: 1499, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600", rating: 4.1 },
  { id: 7, name: "Sneakers", category: "Fashion", price: 2199, oldPrice: 3299, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600", rating: 4.6 },
  { id: 8, name: "Desk Lamp", category: "Home", price: 799, oldPrice: 1199, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600", rating: 4.0 }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Electronics", "Fashion", "Accessories", "Home"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">Shop<span>Sphere.</span></h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#footer">About</a>
        </nav>
        <div className="cart">🛒 Cart ({cart.length})</div>
      </header>

      <section className="hero" id="home">
        <div>
          <p className="tag">WELCOME TO SHOPSPHERE</p>
          <h1>Discover Products<br />You Will Love.</h1>
          <p className="hero-text">
            Find your favourite products at amazing prices.
            Shop smarter, live better.
          </p>
          <a href="#products" className="shop-btn">Explore Products →</a>
        </div>
      </section>

      <main className="catalogue" id="products">
        <div className="section-heading">
          <div>
            <p className="tag">OUR COLLECTION</p>
            <h2>Explore Products</h2>
          </div>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />
        </div>

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="rating">⭐ {product.rating} / 5</p>
                <div className="price-row">
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                  <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                </div>
                <button className="add-btn" onClick={() => addToCart(product)}>
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty">No products found. Try another search.</p>
        )}
      </main>

      <footer id="footer">
        <h2>ShopSphere.</h2>
        <p>Your one-stop destination for quality products.</p>
        <p>© 2026 ShopSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
