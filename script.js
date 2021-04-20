// Мобайл & Десктоп определитель
//  const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMObile/i);
//     },
//     any: function () {
//         return(
//             isMobile.Android() ||
//             isMobile.iOS() ||
//             isMobile.Windows());
//     }
//  };
//
// if (isMobile.any()) {
//     document.body.classList.add('_touch');
// } else {
//     document.body.classList.add('_pc');
// }

// Плавная прокрутка
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}