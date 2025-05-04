document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("date");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });
  
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


   // Service-carousel
   $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const firstname = document.getElementById("firstname").value;
    const secondname = document.getElementById("secondname").value;
    const company = document.getElementById("company").value;
    const address = document.getElementById("address").value;
    const zip = document.getElementById("zip").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const fax = document.getElementById("fax").value;
    const website = document.getElementById("website").value;
    const products = document.getElementById("products").value;
    const comments = document.getElementById("message").value;
    const checkbox = document.getElementById("flexCheck").checked;

    if (!title || !firstname || !secondname || !email || !phone || !address || !city || !country || !products || !comments || !checkbox) {
        alert("Please fill in all required fields and agree to the privacy policy.");
        return; // Prevent form submission
    }
    const subject = encodeURIComponent("New Message from " + firstname + " " + secondname);
    const body = encodeURIComponent(`Title: ${title}\nFirst Name: ${firstname}\nSecond Name: ${secondname}\nCompany: ${company}\nAddress: ${address}\nZip: ${zip}\nCity: ${city}\nCountry: ${country}\nEmail: ${email}\nPhone: ${phone}\nFax: ${fax}\nWebsite: ${website}\nProducts/Services: ${products}\nComments: ${comments}`);
    
    window.location.href = `mailto:info@upstreameng.com?subject=${subject}&body=${body}`;
    });

