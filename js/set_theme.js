let langs_buttons = document.getElementsByClassName('lang-button');
let theme_btn = document.getElementById('theme');

theme_btn.addEventListener("change", setTheme);

function set_color(elements, color) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
    }
}

function updateIconColors(color) {
    let imgLinks = document.querySelectorAll(".footer-img");
    let imgTitle = document.querySelectorAll(".title-img");

    imgLinks.forEach(function(link) {
        const fileName = link.getAttribute("src").split("/").pop();
        const newSrc = `img/social-links/${color}/${fileName}`;
        link.setAttribute("src", newSrc);
    });
    imgTitle.forEach(function(link) {
        const fileName = link.getAttribute("src").split("/").pop();
        const newSrc = `img/buttons/${color}/${fileName}`;
        link.setAttribute("src", newSrc);
    });
}

function setTheme() {
    let body = document.querySelector("body");
    let car_btn = document.getElementsByClassName('btn');
    let second_color = document.getElementsByClassName('second-color');
    let page_links = document.getElementsByClassName('page-links');

    if (theme_btn.value == 'light') {
        body.style.background = 'white';
        body.style.color = 'black';

        set_color(car_btn, 'black');
        set_color(second_color, 'black');
        set_color(page_links, 'black');

        updateIconColors('black');

    } else {
        body.style.background = 'black';
        body.style.color = 'white';

        set_color(car_btn, 'white');
        set_color(second_color, 'white');
        set_color(page_links, 'white');

        updateIconColors('white');
    }
}