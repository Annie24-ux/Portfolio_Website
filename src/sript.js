
// Generic carousel function
function setupCarousel(carouselId, prevBtnId, nextBtnId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    const totalImages = carousel.children.length;
    let currentIndex = 0;

    document.getElementById(prevBtnId).addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById(nextBtnId).addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Set up carousels
setupCarousel('frontendCarousel', 'frontendPrev', 'frontendNext');
setupCarousel('backendCarousel', 'backendPrev', 'backendNext');


//To change routes for navigation
// add.route('/');
// add.route('/about');
// add.route('/contacts');
// add.route('/projects');
//navigating to home page.. '/index'