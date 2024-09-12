// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Home Section Starts

    // Select the menu button and navigation list elements
    var menuBtn = document.querySelector('.main-navbar .menu-btn');
    var menuList = document.querySelector('.main-navbar .nav-list');
    var menuListItems = document.querySelectorAll('.nav-list li a');

    // Toggle the mobile menu when the menu button is clicked
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menuList.classList.toggle('active');
    });

    // Close the menu when any menu item is clicked
    for(var i = 0; i < menuListItems.length; i++){
        menuListItems[i].addEventListener('click', menuItemClicked);
    }
    function menuItemClicked(){
        menuBtn.classList.remove('active');
        menuList.classList.remove('active');
    }

    // Adding a 'scroll' effect to the Home section on page scroll
    var homeSection = document.querySelector('.home');
    window.addEventListener('scroll', pageScrollFunction);
    window.addEventListener('load', pageScrollFunction);

    function pageScrollFunction(){
        // If the page is scrolled more than 120px, add an 'active' class to the home section
        if(window.scrollY > 120){
            homeSection.classList.add('active');
        } else {
            homeSection.classList.remove('active');
        }
    }

    // Home Section Ends

    // Partners Section Starts

    // Initialize Owl Carousel for partners section
    $('.partners-slider').owlCarousel({
        loop: true, // Loop the carousel
        autoplay: true, // Automatically scroll the carousel
        autoplayTimeout: 3000, // Set the delay between scrolls
        margin: 10, // Set margin between carousel items
        nav: true, // Show next/previous navigation arrows
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"], // Custom arrows
        responsive: {
            0: {
                items: 1 // Show 1 item on very small screens
            },
            500: {
                items: 2 // Show 2 items on small screens
            },
            700: {
                items: 3 // Show 3 items on medium screens
            },
            1000: {
                items: 5 // Show 5 items on large screens
            }
        }
    });

    // Partners Section Ends

    // Testimonials Section Starts

    // Initialize Owl Carousel for testimonials section
    $('.testimonials-slider').owlCarousel({
        loop: true, // Loop the carousel
        autoplay: true, // Automatically scroll the carousel
        autoplayTimeout: 6000, // Set the delay between scrolls
        margin: 10, // Set margin between carousel items
        nav: true, // Show next/previous navigation arrows
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"], // Custom arrows
        responsive: {
            0: {
                items: 1 // Show 1 testimonial on small screens
            },
            768: {
                items: 2 // Show 2 testimonials on medium/large screens
            }
        }
    });

    // Testimonials Section Ends

    // Smooth Scroll for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button Actions

    // Get Started Button - scroll to the courses section
    var getStartedBtn = document.querySelector('.get-started-btn');
    getStartedBtn.addEventListener('click', function() {
        document.querySelector('#courses').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // View All Courses Button - scroll to the categories section
    var viewAllBtn = document.querySelector('.courses-btn');
    viewAllBtn.addEventListener('click', function() {
        document.querySelector('#categories').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Join Us Button - open a modal or alert (assuming you have a modal for instructors)
    var joinUsBtn = document.querySelector('.teacher-btn');
    joinUsBtn.addEventListener('click', function() {
        // You can open a modal here or for now, we'll use an alert
        alert('Thank you for your interest in becoming an instructor! Please fill out the form on our instructor page.');
    });

});
