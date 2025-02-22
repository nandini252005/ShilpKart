import React, { useState } from "react";
import pottery from "../images/pottery.png";
import gem from "../images/gem.png";
import toy from "../images/toy.png";
import wood from "../images/wood.png";
import leaf from "../images/leaf.png";
import metal from "../images/metal.png";
import glass from "../images/glass.png";
import wool from "../images/wool.png";

export default function Products() {
  const products = [
    { id: 1, image: pottery, name: "ClayDew", description: "A delicate pottery piece that brings nature’s freshness indoors.", price: 888 },
    { id: 2, image: toy, name: "TerraSculpt", description: "A terracotta sculpture with elegant, earthy design.", price: 999 },
    { id: 3, image: gem, name: "GemCharm", description: "A handcrafted jewelry piece that radiates elegance and artistry.", price: 900 },
    { id: 4, image: wood, name: "WoodWhispers", description: "Crafted from wood, reflecting artistry and nature.", price: 999 },
    { id: 5, image: leaf, name: "LeafTales", description: "A touch of nature, woven into every piece.", price: 989 },
    { id: 6, image: metal, name: "MetalAura", description: "Intricate metal pieces whisper stories of strength and beauty.", price: 777 },
    { id: 7, image: glass, name: "GlassGlimmer", description: "Handcrafted glass creations that sparkle with artistry and elegance.", price: 999 },
    { id: 8, image: wool, name: "CozyCraft", description: "Warmth and elegance in every comforting stitch.", price: 888 }
  ];

  // State to track "Added to Cart" visibility for each product
  const [addedToCart, setAddedToCart] = useState({});

  const addToCart = (id) => {
    setAddedToCart((prev) => ({ ...prev, [id]: true })); // Update state for the clicked product only
  };

  return (
    <>
      <h2 className="products-head">Explore our Handcrafted Products</h2>

      <section className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Price: {product.price}/-</p>

            {addedToCart[product.id] && <div className="hidden">Added to cart ✅</div>}

            <button className="add-to-cart" onClick={() => addToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
