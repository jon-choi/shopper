import React from "react";

const Home = () => {
  return (
    <>
      Hero Banner
      <div className="products-heading">
        <h2>Best Sellers</h2>
        <p>Many, many speakers</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
