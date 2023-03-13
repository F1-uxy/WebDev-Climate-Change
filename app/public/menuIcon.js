function toggleNav(){
    let links = document.querySelector('.mainNav');
    links.classList.toggle('showNav');
    console.log("test");
}

let menuIcon = document.getElementsByClassName("fa-solid fa-backward");
menuIcon[0].addEventListener('click', toggleNav);