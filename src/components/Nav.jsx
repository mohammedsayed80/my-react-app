import { Link } from "react-router-dom"

function Nav({ cartCounter }) {
    function toggleTheme() {
        const Theme = document.querySelector('.theme');
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        Theme.innerText = newTheme === 'light' ? "☀️" : "🌙";
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem("theme", newTheme)
    }
    return (
        <div>
            <header class=" d-flex align-items-center justify-content-evenly shadow-sm ">
                <img src="src\assets\Free-removebg-preview.png" alt="logo" width={"180px"} />
                <nav class="d-flex align-items-center">
                    <div id="menu" class="links-container d-flex align-items-center justify-content-around">
                        <Link to="/">Home</Link>
                        <Link to="/shop" class="shop">shop</Link>
                        <a href="/#new">new items</a>
                        <a href="/#best-sales">best sales</a>
                        <Link to="/contact" class="contact" id="contact" >contact us</Link>
                    </div>
                    <form>
                        <input type="search" name="search" id="search" placeholder="search..." class="shadow" />
                        <button type="button" id="btn-se" onClick={() => {
                            document.getElementById("search").classList.toggle("active")
                            document.getElementById("search").focus()
                            document.getElementById("btn-se").classList.toggle("active")
                        }}><i class='bx bx-search-alt-2'></i></button>
                    </form>
                    <div className="div-cart">
                        <Link to="/cart" class="btn btn-outline-dark rounded-circle cart"><i class='bx bx-cart' ></i><span className="span bg-danger rounded-circle w-50 h-50 d-flex justify-content-center align-items-center fs-5 position-absolute">{cartCounter}</span></Link>
                        <button class="theme btn btn-outline-dark rounded-circle cart" onClick={toggleTheme}>☀️</button>
                    </div>
                </nav>
                <div id="menu-toggle" onClick={() => {
                    let menu = document.getElementById("menu-toggle")
                    let list = document.getElementById("menu")
                    list.classList.toggle("active")
                    menu.classList.toggle("active")
                }}>
                    <div className="s"></div>
                    <div className="s2"></div>
                    <div className="s3"></div>
                </div>
            </header>
        </div>
    )
}
export default Nav