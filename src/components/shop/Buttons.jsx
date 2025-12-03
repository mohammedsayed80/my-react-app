// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from "react-router-dom";

// import './Shop'
export default function Buttons(){
    function filterItems(category) {
        let items = document.querySelectorAll('.product');
        items.forEach((item) => {
            if(category === "All" || item.classList.contains(category)) {
                item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
        });
        let buttons = document.querySelectorAll('.filter');
        buttons.forEach((btn) =>btn.classList.remove('btn-primary'));
        const activeBtn = document.querySelector(`[data-filter="${category}"]`);
        if(activeBtn) {
            activeBtn.classList.add('btn-primary');
        }
    }
    return(
        <>
            <div className=' w-100 d-flex justify-content-center gap-3 mb-4 flex-wrap'>
            <button className='btn btn-primary filter' data-filter="All" onClick={()=>filterItems("All")}>All</button>
            <button className='btn btn-primary filter' data-filter="Smart-Watches" onClick={()=>filterItems("Smart-Watches")}>Smart Watches</button>
            <button className='btn btn-primary filter' data-filter="Laptops" onClick={()=>filterItems("Laptops")}>Laptops</button>
            <button className='btn btn-primary filter' data-filter="Tablets" onClick={()=>filterItems("Tablets")}>Tablets</button>
            <button className='btn btn-primary filter' data-filter="Smart-Phones" onClick={()=>filterItems("Smart-Phones")}>Smart Phones</button>
            </div>
        </>
    )
}