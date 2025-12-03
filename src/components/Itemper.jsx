import React from 'react'

const Itemper = ({ img, title, price, dics,brand }) => {
    return (
        <div className='itemss d-flex align-items-start-  flex-column justify-content-start overflow-hidden'>
            <div className='d-flex align-items-center w-100 overflow-hidden '>
                <img src={img} alt={title} />
                <div className='side-text'>
                    <h2>{title}</h2>
                    <h4>brand: {brand}</h4>
                    <p>price: {price}</p>
                    <p>{dics}</p>
                    <button className='btn btn-primary buy' type="button">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Itemper
