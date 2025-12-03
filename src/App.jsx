import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Shoppage from "./pages/Shoppage";
import Cart from "./pages/Cart";
import Itemper from "./components/Itemper";
import img1 from "./assets/img17.webp";
import img2 from "./assets/img19.webp";
import img3 from "./assets/Oppo-Reno-14F.webp";
import img4 from "./assets/img22.webp";
import img5 from "./assets/Samsung-Galaxy-S25-Ultra-5G-removebg-preview.png";
import img6 from "./assets/hp-zbook-15-g7-laptop-intel-core-i7-10th-gen-i7-10510u-nvidia-quadro-p520-4gb-gddr5-15-6-fhd-32gb-ram-512gb-ssd-m-2-window-10-yas-1.webp";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);


  function addToCart(item) {
    setCartItems([...cartItems, item]);
    setCartCounter((prev) => prev + 1);
  }

  function removeFromCart() {
    setCartItems([]);
    setCartCounter(0);
  }

  function removeFromList(index) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    setCartCounter((prev) => prev - 1);
  }

  return (
    <div>
      <Nav cartCounter={cartCounter}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shoppage AddToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              remove={removeFromCart}
              removeItem={removeFromList}
            />
          }
        />
        <Route
          path="/item1"
          element={
            <Itemper
              img={img1}
              title="iphone 17 pro max"
              price="3000$"
              brand='apple'
              dics=" iPhone 17 Pro Max
                Experience the future of smartphones with unmatched performance, a revolutionary A19 Bionic chip, and a ProMotion XDR display.
                Elegance, power, and innovation — all in your hands. 📱✨"
            />
          }
        />
        <Route
          path="/item2"
          element={
            <Itemper
              img={img2}
              title="Google Pixel 10 Pro XL"
              price="1200$"
              brand="google"
              dics="📸 Google Pixel 10 Pro XL
                  Smarter, faster, and sharper — powered by Google Tensor G5 and built with next-gen AI.
                  Capture every detail with its advanced Pro Camera system and enjoy a pure, seamless Android experience. 🌐✨"
            />
          }
        />
        <Route
          path="/item3"
          element={
            <Itemper
              img={img3}
              title="oppo reno 14"
              price="1499$"
              brand="oppo"
              dics="🌟 OPPO Reno 14
                Style meets performance — with a sleek design, ultra-clear camera system, and blazing-fast charging.
                Your perfect daily companion, built to shine in every moment. 📱✨"
            />
          }
        />
        <Route
          path="/item4"
          element={
            <Itemper
              img={img4}
              title="iphone 17"
              price="2600$"
              brand="apple"
              dics="iPhone 17
                A new era of power and elegance — featuring the A19 Bionic chip, stunning ProMotion XDR display, and all-day battery life.
                Innovation made simple, brilliance made for you. 📱✨"
            />
          }
        />
        <Route
          path="/item5"
          element={
            <Itemper
              img={img5}
              title="Galaxy S25 Ultra AI Dual SIM Titanium Grey 12GB RAM 256GB 5G - Middle East Version"
              brand="samsung"
              price="2000$"
              dics="✨ Samsung Galaxy S25 Ultra ✨
                Redefining innovation with a stunning 200MP camera, lightning-fast performance, and an immersive AMOLED 144Hz display.
                Power meets elegance — the future is in your hands. 🚀📱"
            />
          }
        />
        <Route
          path="/item6"
          element={
            <Itemper
              img={img6}
              title="Hp ZBook 15 G7 Laptop"
              price="2500$"
              brand="hp"
              dics="HP ZBook 15 G7
                Unleash professional power with workstation-grade performance, NVIDIA Quadro graphics, and military-tested durability.
                Built for creators, engineers, and innovators who demand reliability anywhere. 🚀✨"
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
