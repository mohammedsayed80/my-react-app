import { useState } from "react";
import { Message } from "../components/shop/Message";
export default function Cart({ items, remove, removeItem }) {
    const [Order, setOrder] = useState(false);
    function Thanks() {
        const message = document.querySelector('.message');
        message.innerText = "Thank you for your order. We will contact you soon.";
        message.classList.remove('d-none');
        message.classList.add('d-block');
        setTimeout(() => {
        message.classList.remove('d-block');
        message.classList.add('d-none');
        }, 4000);
        setOrder(false);
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center cart-page">
            <div className="Cart p-3 position-relative">
                <h2 className="text-center mb-4 fs-1">cart🛒</h2>
                {items.length === 0 ? (
                    <p className=" text-center">Cart is empty.</p>
                ) : (
                    <ul className="list-group d-flex flex-column gap-3 p-0 m-0 align-items-center">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="border border-3 w-75 p-2 d-flex justify-content-evenly align-items-center"
                            >
                                <div>
                                    <strong>{item.title}</strong>
                                    <br />${item.price}
                                </div>
                                <img src={item.image} alt={item.title} width={150} />
                                <button className=" btn-close" onClick={() => removeItem(index)}></button>
                            </li>
                        ))}
                    </ul>
                )}
                {items
                    .map((item) => item.price)
                    .reduce((total, price) => total + price, 0) > 0 && (
                        <div className="mt-3 text-end">
                            <strong>
                                Total: ${" "}
                                {items
                                    .map((item) => item.price)
                                    .reduce((total, price) => total + price, 0)}
                            </strong>
                        </div>
                    )}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button
                        className="btn btn-danger position-absolute top-0 end-0  "
                        onClick={remove}
                    >
                        Delete All
                    </button>
                    <button className="btn btn-primary" onClick={() => setOrder(true)}>Make Order</button>
                </div>
            </div>

            {Order && (
                <div
                    className="position-fixed w-100 start-50 h-100 rounded-4 top-50 translate-middle d-flex justify-content-center align-items-center"
                    style={{ zIndex: 1000, backdropFilter: 'blur(5px)' }}>
                    <div
                        className="quick-view-content top-0 shadow bg-white p-4 rounded-4 text-center position-relative">
                        <button
                            className="btn-close fs-5 position-absolute top-0 end-0 m-3"
                            onClick={() => setOrder(false)}
                        ></button>

                        <h3 className="mb-4">Make Order</h3>

                        <form className="w-100" onSubmit={(e)=>{e.preventDefault();Thanks()}}>
                            <input type="text" placeholder="Full Name"id="fname" className="form-control mb-2" required />
                            <input type="email" placeholder="Email" id="email" className="form-control mb-2" required />
                            <input type="text" placeholder="Address" id="address" className="form-control mb-2" required />
                            <input type="tel" placeholder="Phone Number" id="phone" className="form-control mb-2" required />
                            <div className="form-control d-flex justify-content-evenly">
                                <div>
                                    <input className=" form-check-input" type="radio" id="pay1" name="pay" />
                                    <label className=" form-check-label ms-3 " htmlFor="pay1">insta Pay</label>
                                </div>
                                <div>
                                    <input className=" form-check-input" type="radio" id="pay2" name="pay" />
                                    <label className=" form-check-label ms-3" htmlFor="pay2">Visa</label>
                                </div>
                                <div>
                                    <input className=" form-check-input" type="radio" id="pay3" name="pay" />
                                    <label className=" form-check-label ms-3" htmlFor="pay3">Cash</label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-25 sub mt-3"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <Message/>
        </div>
    );
}
