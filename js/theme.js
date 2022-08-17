function setTheme() {
    let body = document.querySelector("body");
    let links_img = document.getElementsByClassName('title-link');
    let github_link_img = document.getElementById('github_link_img');
    let car_btn = document.getElementsByClassName('btn');
    if (theme_btn.value == 'light') {
        body.style.background = 'white';
        body.style.color = 'black';
        github_link_img.src = 'img/github.png';
        for (let i = 0; i < links_img.length; i++) {
            links_img[i].src = "img/link.png";
        }
        for (let i = 0; i < car_btn.length; i++) {
            car_btn[i].style.color = 'black';
        }
    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        github_link_img.src = 'img/github_dark.png';
        for (let i = 0; i < links_img.length; i++) {
            links_img[i].src = "img/link_dark.png";
        }
        for (let i = 0; i < car_btn.length; i++) {
            car_btn[i].style.color = 'white';
        }
    }
}

let theme_btn = document.getElementById('theme');
changeTheme = theme.addEventListener("change", setTheme);

