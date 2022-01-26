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
                <li><a href="projets.html">Projets</a></li>
                <li><a href="dessins.html">Dessins</a></li>
                <li><a href="portefolio.pdf" target="_blanc" download>Portfolio</a></li>
                <li><a href="about.html">A propos</a></li>
            </ul>
            <div id="resaux">
                <a href="https://instagram.com/mathis_enguehard_design"><img src="imgs/icons/insta.png" alt=""></a>
                <a href="https://issuu.com/mathisenguehard/docs/portfolio_debur"><img src="imgs/icons/issu.png" alt=""></a>
            </div>
        </nav>

        `);
}

function loading() {


    document.querySelector('#year').innerHTML = new Date().getFullYear();
        console.log("Loading");
        let menush = false;
        let btn = document.querySelector("#navigationbutton");
        let menu = document.querySelector("header nav");
        btn.addEventListener("click", function(){
        if (menush == false){
            menu.style.display = "block";
        menush = true;
        btn.src = "imgs/icons/close.png";
        }
        else {
            menu.style.display = "none";
        btn.src = "imgs/icons/menu.png";
        menush = false;
        }
    })
}