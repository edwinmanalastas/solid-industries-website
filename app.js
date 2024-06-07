/* navigation bar */
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

/* sticky transition */
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

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

const hiddenElements = document.querySelectorAll('.text-content, .about-header, .list-container, .services-header, .services .service, .choose-header, .choose-col, .reviews .container, .contact, .hero-btn');
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

// Services in Nav Bar
document.getElementById('navServicesLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const servicesSection = document.getElementById('services');
    const navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar
    const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - navHeight + 5; // Adjust the scroll position to account for the nav bar height and additional padding

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Our Services Button
document.getElementById('scrollToServices').addEventListener('click', function() {
    const servicesSection = document.getElementById('services');
    const navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar
    const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - navHeight + 5; // Adjust the scroll position to account for the nav bar height and additional padding

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Function to scroll to services section
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    const navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar
    const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - navHeight + 5; // Adjust the scroll position to account for the nav bar height and additional padding

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Check if URL contains #services and scroll to services section
window.addEventListener('load', function() {
    if (window.location.hash === '#services') {
        scrollToServices();
    }
});

// makes sure the video is played
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.muted = true;
    video.play().catch(function(error) {
        // Auto-play was prevented
        console.log("Autoplay prevented");
        // Optionally, handle the error
    });
});
