// barre de nav + logo + menu de navigation


function header() {
    document.write(`
        <div class="logo">
            <a href="index.html"><img src="imgs/logo.png" alt="logo" class="logo"/></a>
        </div>

        <img src="imgs/icons/menu.png" alt="" id="navigationbutton">

        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="dessins.html">Dessins</a></li>
                <li><a href="about.html">A propos</a></li>
            </ul>
            <ul id="resaux">
                <li id="insta"><a href="https://instagram.com/mathis_enguehard_design"><img src="imgs/icons/insta.png" alt=""></a></li>
            </ul>
        </nav>

        `);
}

