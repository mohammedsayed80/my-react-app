import React from 'react'

const Two = () => {
    return (
        <div className='tab-wat'>
            <div className='tab'>
                <p>TABLET</p>
                <h1>Apple ipad air</h1>
                <p> iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPad OS mobile operating systems.</p>
                <button type="submit" className='btn border-4 rounded-5 btn-tab'>Buy Now <i class='bx bx-chevron-right'></i></button>
            </div>
            <div className='wat'>
                <p>SMART</p>
                <h1>Apple watch</h1>
                <p> Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities.</p>
                <button type="submit" className='btn btn-primary border-4 rounded-5  btn-wat'>Buy Now <i class='bx bx-chevron-right'></i></button>
            </div>
        </div>
    )
}

export default Two
