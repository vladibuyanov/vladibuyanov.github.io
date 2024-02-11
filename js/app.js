/* Constants */
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

let langFiles = {
    'lang-en': [headerFile_en, mainFile_en, footerFile_en],
    'lang-ru': [headerFile_ru, mainFile_ru, footerFile_ru],
    'lang-sk': [headerFile_sk, mainFile_sk, footerFile_sk]
};

/**/
function set_color(elements, color) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
    }
}

/* Functions */
function loadAndInsertContent(lang) {
    return new Promise((resolve, reject) => {
        filesToLoad = langFiles[lang];
        const containers = [headerContainer, mainContainer, footerContainer];
        let loadedFilesCount = 0;

        filesToLoad.forEach((file, index) => {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    containers[index].innerHTML = data;
                    loadedFilesCount++;

                    let theme_btn = document.getElementById('theme');
                    if (theme_btn.value == 'dark') {
                        let imgLinks = document.querySelectorAll(".footer-img");
                        let imgTitle = document.querySelectorAll(".title-img");
                        let page_links = document.getElementsByClassName('page-links');

                        updateIconColors('white');
                        set_color(page_links, 'white');
                    };

                    if (loadedFilesCount === filesToLoad.length) {
                        resolve();
                    }
                })
                .catch(error => {
                    console.error("Ошибка при загрузке контента: " + error);
                    reject(error);
                });
        });


    });
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

const headerContainer = document.getElementById("header-content");
const mainContainer = document.getElementById("main");
const footerContainer = document.getElementById("footer");

loadAndInsertContent(enLangId)
    .then(() => {
        let currentIndex = 0;
        let items = document.getElementsByClassName('carousel_item');
        let totalItems = items.length;

        setInterval(() => {
            if (currentIndex != 0 & currentIndex < totalItems) {
                items[currentIndex - 1].style.transform = `translateX(${currentIndex * 100}%)`;
                items[currentIndex].style.transform = `translateX(-${currentIndex * 100}%)`;
            } else if (currentIndex == totalItems) {
                items[currentIndex - 1].style.transform = `translateX(${currentIndex * 100}%)`;
                currentIndex = -1
            }
            currentIndex = (currentIndex + 1);
        }, 5000);
    })
    .catch(error => {
        console.error("Ошибка при выполнении скриптов: " + error);
    });

addEventListener('load', function () {
    function setLang() {
        loadAndInsertContent(this.id);
    }

    let langs_buttons = document.getElementsByClassName('lang-button');
    for (let i = 0; i < langs_buttons.length; i++) {
        langs_buttons[i].addEventListener('click', setLang);
    };

    let theme_btn = document.getElementById('theme');
    theme_btn.addEventListener("change", setTheme);

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

            let imgLinks = document.querySelectorAll(".footer-img");
            let imgTitle = document.querySelectorAll(".title-img");
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

            set_color(car_btn, 'white');
            set_color(second_color, 'white');
            set_color(page_links, 'white');

            updateIconColors('white');
        }
    }
});
