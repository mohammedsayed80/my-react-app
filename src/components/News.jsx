import React from 'react'

const News = () => {
  return (
    <div className='container news rounded-4 border border-2 row position-absolute'>
      <div className='col-12 ps-5 n-left d-flex align-items-start justify-content-center flex-column'>
        <h2>our <span>newsletter</span></h2>
        <p>get updates by subscribe our weekly newsletter</p>
      </div>
      <form className='col-10 n-right d-flex align-items-center justify-content-center'>
        <input className='in-right ps-3 rounded-5' type="email" required placeholder='Enter Your Email...' />
        <button className='btn-right rounded-5' type="submit">subscribe</button>
      </form>
    </div>
  )
}

export default News
