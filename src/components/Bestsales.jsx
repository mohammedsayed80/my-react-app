import React from 'react'
import { Link } from 'react-router-dom'
const Bestsales = () => {
    return (
        <div className='container d-flex flex-column' id='best-sales'>
            <h2 className='fs-1 mb-4'>best <span className='text-primary'>sales</span></h2>
            <div className='d-grid best-items w-100'>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\Samsung-Galaxy-S25-Ultra-5G-removebg-preview.png" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>samsung-galaxy-s25-ultra-5G</h4>
                        <p className='fs-5 text-primary'>2,000$ <span className='text-secondary'><del>2,250$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex mt-2 align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\Tablet2.jpg" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>samsung tab s10 128GB 6GB RAM</h4>
                        <p className='fs-5 text-primary'>$1599 <span className='text-secondary'><del>1650$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex mt-2 align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\download.png" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>samsung tab 128GB 4GB RAM</h4>
                        <p className='fs-5 text-primary'>1,400$ <span className='text-secondary'><del>1,500$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\zhzhzh_1_m6znnve8gsjkjbvp.png" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>HP 14 core i7 16GB RAM 512SSD</h4>
                        <p className='fs-5 text-primary'>2,199$ <span className='text-secondary'><del>2,500$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\images.jpeg" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>Apple Watch</h4>
                        <p className='fs-5 text-primary'>599$ <span className='text-secondary'><del>650$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\iPhone-14.webp" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>iPhone 14</h4>
                        <p className='fs-5 text-primary'>1999$ <span className='text-secondary'><del>2200$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\samsung-s23.jpeg" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>samsung s-23</h4>
                        <p className='fs-5 text-primary'>1799$ <span className='text-secondary'><del>1850$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>
                <div className='item-be d-flex align-items-center justify-content-evenly flex-column'>
                    <img src="src\assets\Tablet3.webp" alt="" height={"200px"} />
                    <div className='text-be w-100'>
                        <h4 className='fs-5'>G-Tab Pad 10</h4>
                        <p className='fs-5 text-primary'>1799$ <span className='text-secondary'><del>1850$</del></span></p>
                        <Link to="/shop" className='btn btn-primary mb-2'>show in shop</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Bestsales
