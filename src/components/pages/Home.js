import React from "react";
import "../../styles/Home.css";
import Product from "../Product";

function Home() {
  return (
    <div className="home_container">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/71nMnjV947L._SX3000_.jpg"
      ></img>

      <div className="product_row">
        <Product
          id={1}
          title="Nike Women's Gym Sneaker"
          price={48.99}
          rating={4}
          img="https://m.media-amazon.com/images/I/71zGp3WumlL._AC_UX695_.jpg"
        />
        <Product
          id={2}
          title='2020 Apple MacBook Air Laptop: Apple M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. English'
          price={1249.99}
          rating={5}
          img="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg"
        />
      </div>

      <div className="product_row">
        <Product
          id={3}
          title="Floating Shelves Wall Mounted Rustic Wood Wall Shelf Set of 2 - Bathroom Shelf with Towel Bar - Kitchen Wall Shelf Floating Wood Shelves for Bedroom"
          price={35.49}
          rating={3}
          img="https://m.media-amazon.com/images/I/71VMpIWysUL._AC_SX679_.jpg"
        />
        <Product
          id={4}
          title="JOOLA NOVA - Outdoor Table Tennis Table with Waterproof Net Set - Tournament Quality - Indoor & Outdoor Compatible"
          price={370.49}
          rating={4}
          img="https://m.media-amazon.com/images/I/81Sx5Q3-eIL._AC_SX679_.jpg"
        />
        <Product
          id={5}
          title="Anker 4-Port USB 3.0 Ultra Slim Data Hub for MacBook, Mac Pro/Mini, Mobile HDD, and More"
          price={15.99}
          rating={5}
          img="https://m.media-amazon.com/images/I/512Vua1otlL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
