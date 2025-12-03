import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='container'>
            <div id="carouselExample" class="carousel slide border-0 rounded-4">
                <div class="carousel-inner slide">
                    <div class="carousel-item active itm">
                        <div className="textbox">
                            <h1>get <span>best laptops</span> with lower price</h1>
                            <p>“Discover unmatched performance and reliability with the new HP Laptop — designed to power your work, studies, and ambitions with ease.”</p>

                            <div className="btn-container">
                            <Link to='/shop' className='btn1 lin'>explore Now <i class='bx bx-chevron-right'></i></Link>
                            <button type="button" className='btn2'><i class='bx bxs-right-arrow' ></i></button>
                            <a href='#' className='fs-5'>watch promotion</a>
                            </div>
                        </div>
                        <img src="https://hp.widen.net/content/n1sa99f33u/png/n1sa99f33u.png?w=800&h=600&dpi=72&color=ffffff00" alt="hp laptop" />
                    </div>
                    <div class="carousel-item itm itm2">
                        <div className="textbox">
                            <h1>get <span>best phones</span> with lower price</h1>
                            <p>“Experience innovation redefined with the new iPhone — where powerful performance meets timeless design.”</p>

                            <div className="btn-container">
                            <Link to='/shop' className='btn1 lin'>explore Now <i class='bx bx-chevron-right'></i></Link>
                            <button type="button" className='btn2'><i class='bx bxs-right-arrow' ></i></button>
                            <a href='#' className='fs-5'>watch promotion</a>
                            </div>
                        </div>
                        <img className='object-fit-contain' src="https://sell.grademobile.co.uk/media/2466/catalog/iPhone-16-pro-silver-1.png" alt="iphone" />
                    </div>
                    <div class="carousel-item itm itm3">
                        <div className="textbox">
                            <h1>get <span>best smart watches</span> with lower price</h1>
                            <p>“Stay connected, stay in control — the new Smart Watch combines style, innovation, and everyday convenience on your wrist.”</p>

                            <div className="btn-container">
                            <Link to='/shop' className='btn1 lin'>explore Now <i class='bx bx-chevron-right'></i></Link>
                            <button type="button" className='btn2'><i class='bx bxs-right-arrow' ></i></button>
                            <a href='#' className='fs-5'>watch promotion</a>
                            </div>
                        </div>
                        <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-smartwatch-banner-png-image_11919210.png" alt="smart watch" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Hero
