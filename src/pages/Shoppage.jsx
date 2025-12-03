// import './App.css'
import { useState } from 'react'
import img from '../assets/521878-Product-0-I-637602224301162434_600x600.webp'
import img1 from '../assets/download.jpeg'
import img2 from '../assets/images.jpeg'
import img3 from '../assets/zhzhzh_1_m6znnve8gsjkjbvp.png'
import img4 from '../assets/_-_2025-06-14t112532.505.jpg'
import img5 from '../assets/43071_3-1000x1000.jpg'
import img6 from '../assets/Tablet1.webp'
import img7 from '../assets/Tablet2.jpg'
import img8 from '../assets/Tablet3.webp'
import img9 from '../assets/iPhone-14.webp'
import img10 from '../assets/samsung-s23.jpeg'
import img11 from '../assets/redmi-13.jpeg'
import img12 from '../assets/Oppo-Reno-14F.webp' 
import img13 from '../assets/Samsung-Galaxy-S25-Ultra-5G-removebg-preview.png' 
import img14 from '../assets/iPhone-16-Plus-1.jpg' 
import img15 from '../assets/hp-zbook-15-g7-laptop-intel-core-i7-10th-gen-i7-10510u-nvidia-quadro-p520-4gb-gddr5-15-6-fhd-32gb-ram-512gb-ssd-m-2-window-10-yas-1.webp'
import img16 from '../assets/img16.webp' 
import img17 from '../assets/img17.webp'
import img18 from '../assets/img18.webp'
import img19 from '../assets/img19.webp'
import img20 from '../assets/img20.avif'
import img21 from '../assets/img21.webp'
import img22 from '../assets/img22.webp'
import img23 from '../assets/img23.webp'
import Header from '../components/shop/Header'
import { Message } from '../components/shop/Message'
import Buttons from '../components/shop/Buttons'
import Shop from '../components/shop/Shop'

function Shoppage({ AddToCart}) {

  // function click add cart
  function Caart(e, title) {
    e.target.classList.toggle('active');
    const message = document.querySelector('.message');
    message.innerText = `The ${title} has been added to cart.`;
    message.classList.remove('d-none');
    message.classList.add('d-block');
    setTimeout(() => {
      message.classList.remove('d-block');
      message.classList.add('d-none');
    }, 4000);
  }

  // items
  const products = [
    { image: img, title: "Black Sport Watch", category: "Smart-Watches", price: 499 },
    { image: img1, title: "Chrome Watch", category: "Smart-Watches", price: 549 },
    { image: img2, title: "Apple Watch", category: "Smart-Watches", price: 599 },
    { image: img3, title: "HP 14", category: "Laptops", price: 2199 },
    { image: img4, title: "Asus Tuf f16", category: "Laptops", price: 2999 },
    { image: img5, title: "Dell Inspairon", category: "Laptops", price: 2599 },
    { image: img6, title: "Tablet T9", category: "Tablets", price: 1099 },
    { image: img7, title: "Samsung Tab S10", category: "Tablets", price: 1599 },
    { image: img8, title: "G-Tab Pad 10", category: "Tablets", price: 1799 },
    { image: img9, title: "iPhone 14", category: "Smart-Phones", price: 1999 },
    { image: img10, title: "Samsung s23", category: "Smart-Phones", price: 1799 },
    { image: img11, title: "Redmi 14", category: "Smart-Phones", price: 1499 },
    { image: img12, title: "oppo reno 14", category: "Smart-Phones", price: 1499 },
    { image: img13, title: "samsung s25 ulta 5G", category: "Smart-Phones", price: 2000 },
    { image: img14, title: "iphone 17", category: "Smart-Phones", price: 2600 },
    { image: img15, title: "hp zBook i5 g7 laptop", category: "Laptops", price: 2500 },
    { image: img16, title: "hp zBook i5 g5 laptop", category: "Laptops", price: 2500 },
    { image: img17, title: "iphone 17 pro max", category: "Smart-Phones", price: 3000 },
    { image: img18, title: "realme 14 pro", category: "Smart-Phones", price: 1800 },
    { image: img19, title: "google pexel pro", category: "Smart-Phones", price: 1800 },
    { image: img20, title: "ipad air", category: "Tablets", price: 1800 },
    { image: img21, title: "oppo a98", category: "Smart-Phones", price: 1800 },
    { image: img22, title: "iphone 17 pro", category: "Smart-Phones", price: 2200 },
    { image: img23, title: "realme 17 pro", category: "Smart-Phones", price: 2200 },
  ];

  return (
    <div className="shop-page">
      <Header />
      <Message />
      <Buttons />
      <div>
        <div className=''>
          <div className='container gap-4 p-2'>
            {products.map((product, index) => (
              <Shop
                key={index}
                image={product.image}
                title={product.title}
                category={product.category}
                price={product.price}
                fun={(e) => {
                  Caart(e, product.title);
                  AddToCart(product);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoppage;
