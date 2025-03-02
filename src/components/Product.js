import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css"; // Import the CSS file

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAPI = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log("Response", data);
      setProducts(data?.products);
      setLoading(false);
      console.log(loading);
    } catch (e) {
      setLoading(false);
      console.log("error", e.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "30px 0",
        background: "linear-gradient(170deg, #1d1d1d, #000000)",
      }}
    >
      {products &&
        products.length > 0 &&
        products.map((product, i) => {
          return (
            <div style={{ width: "350px" }} key={i}>
              <div
                className="card product-card"
                style={{ background: "#ffffff66", border: "none" }}
              >
                {/* Apply the CSS class */}
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Name - {product.title}</h5>
                  <p className="card-text">Price - {product.price}</p>
                  <Link to={`/${product.id}`} className="btn btn-primary">
                    Buy Now &rarr;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Product;
