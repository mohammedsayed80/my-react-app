import React from 'react'

const Deal = () => {
  return (
    <div className='container'>
      <div className='w-100 row rounded-5 shadow-sm main d-flex border border-2'>
        <div className="left d-flex align-items-start justify-content-evenly flex-column col-6">
            <span className='s1'>deal of the day</span>
            <h2>get <span>mac book</span> with 20% off.</h2>
            <p>"Experience unmatched performance and refined design with the new MacBook — built for professionals who demand excellence."</p>
            <a href="">get 20% off now</a>
        </div>
        <div className='right col-6'>
            <div className="bg-right"></div>
            <img src="src\assets\0-116888-15-MBA-xl-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Deal
