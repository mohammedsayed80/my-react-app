import React from 'react'
import News from './News'

const Footer = () => {
  return (
    <div className='footer w-100'>
        <News/>
        <div className='w-100 d-grid alfooter'>
            <div className='d-flex align-items-center justify-content-evenly flex-column'>
                <img src="src\assets\Free-removebg-preview.png" style={{width:"220px"}} alt="" />
                <h4>our address</h4>
                <p>cairo</p>
                <p>alex</p>
                <p>banha</p>
                <p>0244393691</p>
                <div className='social'>
                <a className='l1' href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-evenly flex-column'>
                <h4>useful links</h4>
                <a href="#">our shop</a>
                <a href="#">services</a>
                <a href="#">news</a>
                <a href="#">contact</a>
            </div>
            <div className='d-flex align-items-center justify-content-evenly flex-column'>
                <h4>support</h4>
                <a href="#">FAQs</a>
                <a href="#">refund</a>
                <a href="#">privacy</a>
                <a href="#">report</a>
                <a href="#">DMCA</a>
            </div>
            <div className='d-flex align-items-center justify-content-evenly flex-column'>
                <h4>information</h4>
                <a href="#">about us</a>
                <a href="#">our services</a>
                <a href="#">pricing plan</a>
                <a href="#">vendor shop</a>
                <a href="#">affiliate</a>
                <a href="#">stores</a>
            </div>
            <div className='d-flex align-items-center justify-content-evenly flex-column'>
                <h4>services</h4>
                <a href="#">products</a>
                <a href="#">payment</a>
                <a href="#">discount</a>
                <a href="#">promotional</a>
                <a href="#">gifts</a>
            </div>
        </div>
            <p className='w-100 text-center bottom-0 position-absolute fs-5'>&copy;2025 mohammed sayed & omar hosny, all rights reserved</p>
    </div>
  )
}

export default Footer
