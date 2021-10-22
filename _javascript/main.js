document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

// Universal variables
var screenWidth = document.querySelector('body').offsetWidth;

// Banner tenisica infinite jump animation
let jumpHeight = document.querySelector('.bg').offsetHeight - ((.4 * screenWidth) * .56);
let jumpWidth = screenWidth + (.4 * screenWidth);

let tenisicaInfiniteVertical = gsap.timeline ({repeat:-1});
tenisicaInfiniteVertical.to('.tenisica-small',{
    y: jumpHeight,
    duration:1,
    ease:"power1.in",
})
tenisicaInfiniteVertical.to('.tenisica-small',{
    y: 0,
    duration:1,
    ease:"power1.out",
})
let tenisicaInfiniteHorizontal = gsap.timeline ()
.to('.tenisica-small',{
    x: jumpWidth,
    duration:7,
    ease:"none",
    repeat:-1,
})

// Window resize
var resizeTimer;

window.addEventListener('resize', function() {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
  
    location.reload();
       
  }, 250);

});