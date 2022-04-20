const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="Bookly -many's favorite">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="user.html"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">novels</a></li>
            <li class="link-item"><a href="#" class="link">comedy comics</a></li>
            <li class="link-item"><a href="#" class="link">study books</a></li>
            <li class="link-item"><a href="#" class="link">fictional books</a></li>
        </ul>
    `;
}

createNav();