function loadAndInsertContent(lang) {
    let filesToLoad;
    if (lang === enLangId) {
        filesToLoad = [headerFile_en, mainFile_en, footerFile_en];
    } else if (lang === ruLangId) {
        filesToLoad = [headerFile_ru, mainFile_ru, footerFile_ru];
    } else {
        filesToLoad = [headerFile_sk, mainFile_sk, footerFile_sk];
    };
    const containers = [headerContainer, mainContainer, footerContainer];

    filesToLoad.forEach((file, index) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                containers[index].innerHTML = data;
            })
            .catch(error => {
                console.error("Ошибка при загрузке контента: " + error);
            });
    });
};

const headerContainer = document.getElementById("header-content");
const mainContainer = document.getElementById("main");
const footerContainer = document.getElementById("footer");

const headerFile_en = "./html/en/header.html";
const mainFile_en = "./html/en/main.html";
const footerFile_en = "./html/en/footer.html";

const headerFile_ru = "./html/ru/header.html";
const mainFile_ru = "./html/ru/main.html";
const footerFile_ru = "./html/ru/footer.html";

const headerFile_sk = "./html/sk/header.html";
const mainFile_sk = "./html/sk/main.html";
const footerFile_sk = "./html/sk/footer.html";

let enLangId = 'lang-en';
let ruLangId = 'lang-ru';
let skLangId = 'lang-sk';

loadAndInsertContent(enLangId);
addEventListener('load', function () {
    let langs_buttons = document.getElementsByClassName('lang-button');
    for (let i = 0; i < langs_buttons.length; i++) {
        langs_buttons[i].addEventListener('click', setLang);
    };

    let theme_btn = document.getElementById('theme');
    theme_btn.addEventListener("change", setTheme);

    function setLang() {
        let langId = this.id;
        if (langId === enLangId) {
            loadAndInsertContent(enLangId);
        } else if (langId === ruLangId) {
            loadAndInsertContent(ruLangId);
        } else {
            loadAndInsertContent(skLangId);
        }
    }
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
