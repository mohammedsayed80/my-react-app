import React from 'react'
import Shop from '../shop/Shop'
import img1 from '../../assets/img17.webp'
import img2 from '../../assets/img19.webp'
import img3 from '../../assets/Oppo-Reno-14F.webp'
import img4 from '../../assets/img22.webp'
import img5 from '../../assets/Samsung-Galaxy-S25-Ultra-5G-removebg-preview.png'
import img6 from '../../assets/hp-zbook-15-g7-laptop-intel-core-i7-10th-gen-i7-10510u-nvidia-quadro-p520-4gb-gddr5-15-6-fhd-32gb-ram-512gb-ssd-m-2-window-10-yas-1.webp'
import Newitem from './Newitem'
import { Link } from 'react-router-dom'
const Newest = () => {
  const newwst = [
    { imge: img1, title: "iphone 17 pro max", price: 3000,lnk:"/item1" },
    { imge: img2, title: "Google Pixel 10 Pro XL", price: 1200,lnk:"/item2" },
    { imge: img3, title: "oppo reno 14", price: 1499,lnk:"/item3" },
    { imge: img4, title: "iphone 17", price: 2600,lnk:"/item4" },
    { imge: img5, title: "samsung s25 ultra", price: 2000,lnk:"/item5" },
    { imge: img6, title: "Hp ZBook 15 G7 Laptop", price: 2500 ,lnk:"/item6"},
  ]
  return (
    <div id='new' className='d-flex align-items-center justify-content-center flex-column m-5 flex-wrap'>
      <h2 className='fs-1'>our <span className='text-primary'>newest</span> items in our store</h2>
      <div className='w-100 container d-grid all-new'>
        {newwst.map((item, index) => (
          <Newitem key={index} img={item.imge} title={item.title} price={item.price} path={item.lnk} /> 
        ))}
      </div>
    </div>
  )
}

export default Newest
