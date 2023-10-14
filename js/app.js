function loadAndInsertContent()  {
    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Ошибка при загрузке контента: " + error);
        });
    fetch(mainFile)
        .then(response => response.text())
        .then(data => {
            mainContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Ошибка при загрузке контента: " + error);
        });
    fetch(footerFile)
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Ошибка при загрузке контента: " + error);
        });
}

const headerContainer = document.getElementById("header");
const mainContainer = document.getElementById("main");
const footerContainer = document.getElementById("footer");

const headerFile = "./en/header.html"
const mainFile = "./en/main.html"
const footerFile = "./en/footer.html"



loadAndInsertContent();
addEventListener('load', function () {
    let theme_btn = document.getElementById('theme');
    theme_btn.addEventListener("change", setTheme);

    function setTheme() {
        let body = document.querySelector("body");
        let car_btn = document.getElementsByClassName('btn');
        let second_color = document.getElementsByClassName('second-color');

        // Получить элементы img с классом "img-link"
        let imgLinks = document.querySelectorAll(".footer-img");
        let imgTitle = document.querySelectorAll(".title-img");

        if (theme_btn.value == 'light') {
            body.style.background = 'white';
            body.style.color = 'black';

            for (let i = 0; i < car_btn.length; i++) {
                car_btn[i].style.color = 'black';
            }
            for (let i = 0; i < second_color.length; i++) {
                second_color[i].style.color = 'black';
            }
            // Пройти по всем элементам img и изменить их атрибуты src
            imgLinks.forEach(function(link) {
                const fileName = link.getAttribute("src").split("/").pop();
                const newSrc = `img/social-links/${fileName}`;
                link.setAttribute("src", newSrc);
            });
            imgTitle.forEach(function(link) {
                const fileName = link.getAttribute("src").split("/").pop();
                const newSrc = `img/buttons/${fileName}`;
                link.setAttribute("src", newSrc);
            });

        } else {
            body.style.background = 'black';
            body.style.color = 'white';

            for (let i = 0; i < car_btn.length; i++) {
                car_btn[i].style.color = 'white';
            }
            for (let i = 0; i < second_color.length; i++) {
                second_color[i].style.color = 'white';
            }
            // Пройти по всем элементам img и изменить их атрибуты src
            imgLinks.forEach(function(link) {
                const fileName = link.getAttribute("src").split("/").pop();
                const newSrc = `img/social-links/white/${fileName}`;
                link.setAttribute("src", newSrc);
            });
            imgTitle.forEach(function(link) {
                const fileName = link.getAttribute("src").split("/").pop();
                const newSrc = `img/buttons/white/${fileName}`;
                link.setAttribute("src", newSrc);
            });
        }
    }
});
