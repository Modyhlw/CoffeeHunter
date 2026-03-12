const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.remove("show-mobile-menu");
});

document.addEventListener('click', function(event) {
    if (document.body.classList.contains('show-mobile-menu') && 
        !event.target.closest('.nav-menu') && 
        !event.target.matches('#menu-open-button') && 
        !event.target.matches('#menu-close-button')) {
        document.body.classList.remove('show-mobile-menu');
    }
});
