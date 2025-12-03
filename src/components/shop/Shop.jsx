import "../../App.css"
import React, { useState } from 'react';
export default function Shop({ image, title, category, price, fun }) {

    const [selectedProduct, setSelectedProduct] = useState("");
    
    const [quantity, setQuantity] = useState(1);

    function increaseQty() {
        setQuantity(prev => prev + 1);
}

    function decreaseQty() {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
}

    function handleSearchClick(product) {
        setSelectedProduct(product);
}
    return (
        <div className={`content ${category} product position-relative border border-3 rounded-5 p-3 text-center`}>
            <img src={image} alt={title} width={200} />
            <h3>{title}</h3>
            <p>{category}</p>
            ⭐⭐⭐⭐⭐
            <br />
            <strong>${price}</strong>
            <div className='buttons position-absolute top-50'>
                <button className='btn btn-primary' onClick={fun}>Add to Cart</button>
            </div>
            <div className='d-flex flex-column icons position-absolute gap-2'>
                <button className="rounded-circle d-flex justify-content-center align-items-center fs-4 search-icon" onClick={()=>handleSearchClick({ image, title, category, price })}>🔍</button>
            </div>

            {/* Details for item*/}
            {selectedProduct && (
            <div className="quick-view-overlay position-fixed rounded-5 w-100 h-100 d-flex justify-content-center align-items-center "
                style={{ zIndex: 1000 }}>
            <div className="quick-view-content bg-white p-4 rounded-4 text-center position-relative shadow">
                <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => setSelectedProduct(null)}></button>

                <img src={selectedProduct.image} alt={selectedProduct.title} width={200} className="mb-3" />
                <h3>{selectedProduct.title}</h3>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Price:</strong> ${selectedProduct.price}</p>
                <p><strong>Description:</strong> This is a great product with excellent features.</p>

                <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <button className="btn btn-outline-secondary" onClick={decreaseQty}>-</button>
                <span className="fw-bold fs-5">{quantity}</span>
                <button className="btn btn-outline-secondary" onClick={increaseQty}>+</button>
                </div>

                <button className="btn btn-primary w-100" onClick={fun}>Add {quantity} to Cart</button>
            </div>
            </div>
            )}
        </div>
    )
}