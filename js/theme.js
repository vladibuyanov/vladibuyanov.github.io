a = [document.querySelectorAll("a")[9], document.querySelectorAll("a")[10]]
console.log(a)

function setTheme() {
    let body = document.querySelector("body");
    let links = [document.querySelectorAll("a")[9], document.querySelectorAll("a")[10]];
    let links_img = document.getElementsByClassName('title-link');
    let github_link_img = document.getElementById('github_link_img');
    let car_btn = document.getElementsByClassName('btn');

    if (theme_btn.value == 'light') {
        body.style.background = 'white';
        body.style.color = 'black';

        for (let i = 0; i < links.length; i++) {
            console.log(links[i])
            links[i].style.color = 'black';
        }
        for (let i = 0; i < links_img.length; i++) {
            links_img[i].src = "img/link.svg";
        }
        for (let i = 0; i < car_btn.length; i++) {
            car_btn[i].style.color = 'black';
        }
    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';

        for (let i = 0; i < links.length; i++) {
            console.log(links[i])
            links[i].style.color = 'white';
        }
        for (let i = 0; i < links_img.length; i++) {
            links_img[i].src = "img/link_dark.svg";
        }
        for (let i = 0; i < car_btn.length; i++) {
            car_btn[i].style.color = 'white';
        }
    }
}

let theme_btn = document.getElementById('theme');
changeTheme = theme.addEventListener("change", setTheme);

