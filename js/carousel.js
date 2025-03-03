setInterval(() => {
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");

    function nextSlide() {
        let firstSlide = slider.firstElementChild;
        let firstClone = firstSlide.cloneNode(true);
        slider.appendChild(firstClone);
        firstSlide.style.width = "0";

        setTimeout(() => {
            firstSlide.remove();
        }, 5000);
    }
    nextSlide()
}, 10000);
