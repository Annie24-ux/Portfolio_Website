const pageSections= documents.querySelectorAll('section');
const navLinks = documents.querySelectorAll('nav ul li a');


window.addEventListener('scroll',() => {
    let currentSection = '';

    pageSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(payeYOffset >= sectionTop - 60){
            currentSection = section.getAttribute('id');
        }
        
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').subString(1) === currentSection){
            link.classList.add('active');
        }


    }
    
    );

});

//To change routes for navigation
// add.route('/');
// add.route('/about');
// add.route('/contacts');
// add.route('/projects');
//navigating to home page.. '/index'