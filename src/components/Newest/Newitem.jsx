import React from 'react'
import { Link } from 'react-router-dom'

const Newitem = ({img,title,price,path}) => {
  return (
    <div className='new-itm d-flex align-items-center justify-content-evenly flex-column mt-3'>
      <img src={img} alt={title} height={"200px"} />
      <h4>{title}</h4>
      <p>{price}$</p>
      <span className='position-absolute start-0 rounded-2 bg-success text-white' style={{top:20}}>new</span>
      <Link to={path} className='btn btn-primary'>explore now</Link>
    </div>
  )
}

export default Newitem
