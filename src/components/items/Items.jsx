import React from 'react'
import './items.css'
import tab from '../../assets/download.png'
const Items = () => {
  return (
    <div className='mt-5 allll'>
        <h2 className='fs-1 text-center text-primary'>what we provided?</h2>
        <div className="all-items d-flex align-items-center justify-content-evenly w-100">
            <div className="item-sel">
                <div className="photo rounded-circle">
                    <img src="https://sell.grademobile.co.uk/media/2466/catalog/iPhone-16-pro-silver-1.png" alt="" />
                </div>
                    <p>Apple</p>
            </div>
            <div className="item-sel">
                <div className="photo rounded-circle">
                    <img src="src\assets\Samsung-Galaxy-S25-Ultra-5G-removebg-preview.png" alt="" />
                </div>
                    <p>Android</p>
            </div>
            <div className="item-sel">
                <div className="photo rounded-circle d-flex flex-column align-items-center justify-content-evenly">
                    <img src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15-fd0209tu/15-fd0208tu-01-228x228.webp" alt="" />
                </div>
                    <p>laptops</p>
            </div>
            <div className="item-sel">
                <div className="photo rounded-circle">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/046/829/689/small_2x/smart-watch-isolated-on-transparent-background-png.png" alt="" />
                </div>
                    <p>smart watches</p>
            </div>
            <div className="item-sel">
                <div className="photo rounded-circle">
                    <img src={tab} alt="" />
                </div>
                    <p>tablets</p>
            </div>
        </div>
    </div>
  )
}

export default Items
