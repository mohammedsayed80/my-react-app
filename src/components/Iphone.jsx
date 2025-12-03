import React from 'react'
import { Link } from 'react-router-dom'

const Iphone = () => {
    return (
        <div className='container bg-dark iphone rounded-5'>
            <img src="src\assets\iPhone-17.png"  alt="" />
            <div className='txt d-flex align-items-start justify-content-evenly flex-column'>
                <h2 className='text-white'>𝐢𝐩𝐡𝐨𝐧𝐞 𝟏𝟕 𝐩𝐫𝐨 𝐦𝐚𝐱</h2>
                <p>
                    Experience the future of innovation with the most powerful iPhone ever. <br />
                    🚀 Ultra-fast performance <br />
                    📸 Professional-grade camera system <br />
                    🔋 All-day battery life <br />
                    ✨ Sleek, premium design <br />
                    Upgrade to the iPhone 17 Pro Max — where performance meets perfection.</p>
                    <Link to='item1' className='btn btn-primary'>buy now</Link>
            </div>
        </div>
    )
}

export default Iphone
