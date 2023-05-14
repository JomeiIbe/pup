// Fade effect
var   Heroswiper = new Swiper(".banner-slide", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
     delay: 2500,
      disableOnInteraction :true,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".testimo-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
       delay: 2200,
       disableOnInteraction :true,
    },
});

const navbar = document.querySelector(".navbar");
const winBegin = window.scrollY <= 0;
const  winScroll = window.scrollY > 50;

window.addEventListener("scroll", () => {
  
       navbar.classList.toggle("active",  window.scrollY > 50);
       closeModal();       
     }); 
   
  
  //  mobile navigation action control 
  //  const menubar = document.querySelector(".menu");
  // 



//Navbar var decleration
let menubar         = document.querySelector(".nav_toggle-btn");
const cstmOverlay = document.querySelector(".overlay");
const mobile_nav      = document.querySelector(".nav-links");
const social_link     = document.querySelector(".socials");


menubar.onclick = () => {
 menubar.classList.toggle("active");
 cstmOverlay.classList.toggle("active");
 mobile_nav.classList.toggle("active");
 social_link.classList.toggle("active");

};

// window.addEventListener('click', outsideClick);  


// not return  window.addEventListener('scroll', outsideClick);  


window.onload = () => {

  fadeOut();
}


const websiteLoader = () =>{
  document.querySelector(load-container).add("active");
}

const fadeOut = () => {
  setTimeout(websiteLoader, 3000);
}


function closeModal() {
  menubar.classList.remove("active");
  mobile_nav.classList.remove("active");
  social_link.classList.remove("active");
  cstmOverlay.classList.remove("active");

  outsideClick();
};


function outsideClick(e) {
  if (e.target == cstmOverlay) { 
   return closeModal();
  }; 
  if(e.target == winScroll) {
    return  closeModal();
  };  
};






 //Scroll Reveal
 const Sr = new ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 1400,
  delay: 2000
});




// reveal target elements && change class elements

Sr.reveal('.sec-title1, .endtext_data1', {delay: 200, origin: 'bottom'});
Sr.reveal('.intro-image-section, .chooseUs-text, #chooseUs-btn, .chooseUs-heading.cu-2, .team-img', {delay: 300, origin: 'left', interval: 200});
Sr.reveal('#i-phase, .pet-card', {delay: 200, origin: 'bottom', interval: 100});
Sr.reveal('#in-crd-1, #in-crd-2, #in-crd-3, #in-crd-4', {delay: 400, origin: 'bottom', interval: 300});
Sr.reveal('.chooseUs-heading, .chooseUs_sub', {delay: 300, origin: 'top', interval: 200});

Sr.reveal('#endtext_img, .Always', {delay: 400, origin: 'left'});
Sr.reveal('.endtext_data2', {delay: 400, origin: 'left'});





 

