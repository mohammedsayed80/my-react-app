import React from 'react'

const Headco = () => {
  return (
    <div className='d-flex align-items-center justify-content-evenly w-100 flex-column head-co'>
      <h1>get in touch <span>with us</span></h1>
      <div className='d-flex align-items-center justify-content-evenly w-100 all-co'>
        <div className="one-co co rounded-5 shadow d-flex align-items-center justify-content-evenly flex-column">
          <i class='bx bx-envelope rounded-circle bg-primary text-white' ></i>
          <h4>email</h4>
          <p className='text-lowercase'>mohammedsayeed4554@gmail.com</p>
          <p className='text-lowercase'>omarhosny@gmail.com</p>
        </div>
        <div className="two-co co  rounded-5 shadow d-flex align-items-center justify-content-evenly flex-column">
          <i class='bx bxs-phone rounded-circle bg-primary text-white' ></i>
          <h4>phone</h4>
          <p>+20 110 058 4790</p>
          <p>+20 122 389 1024</p>
        </div>
        <div className="three-co co rounded-5 shadow d-flex align-items-center justify-content-evenly flex-column">
          <i class='bx bxs-location-plus rounded-circle bg-primary text-white' ></i>
          <h4>location</h4>
          <p>cairo</p>
          <p>banha</p>
        </div>
      </div>
    </div>
  )
}

export default Headco
