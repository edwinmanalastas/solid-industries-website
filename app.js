/* mobile navigation bar */
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-center').classList.toggle('active');
    document.querySelector('.nav-right').classList.toggle('active');
});



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

