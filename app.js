/* navigation bar */
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } /* else {
            entry.target.classList.remove('show');
        } */
    })
}); 

const hiddenElements = document.querySelectorAll('.text-content, .about-header, .list-container, .services-header, .services .service, .choose-header, .choose-col, .reviews .container, .contact');
hiddenElements.forEach((el)=> observer.observe(el));

/* swipers */
const swiper = new Swiper('.js-reviews-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-reviews-pagination',
        clickable: true
    },
    autoplay: {
    delay: 10000, // Delay between transitions in milliseconds. Adjust as needed.
    disableOnInteraction: false, // Continue autoplay after user interactions
    },
    speed: 1000,
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});
