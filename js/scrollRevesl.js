
 //Scroll Reveal
 const Sr = new ScrollReveal({
    reset: false,
    distance: '60px',
    delay: 100
  });
  
  // reveal target elements && change class elements
  
  Sr.reveal('.sec-title1,.endtext_data1,',{delay: 300, origin: 'bottom', interval: 300});
  Sr.reveal('.intro-image-section, .chooseUs-text, #chooseUs-btn, .chooseUs-heading.cu-2,.team-img',{delay: 400, origin: 'left', interval: 200});
  Sr.reveal('.chooseUs-heading, .chooseUs_sub',{delay: 500, origin: 'top', interval: 200});
  
  Sr.reveal('.endtext_img, ',{delay: 400, origin: 'left', interval: 200});
  Sr.reveal('.endtext_data2, ',{delay: 500, origin: 'left', interval: 300});

//   });