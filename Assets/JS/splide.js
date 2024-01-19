const splide = new Splide(".splide", {
    // Optional parameters
    start: 1,
    perPage: 2.5,
    perMove: 1,
    gap: 20,
    type: "loop",
    drag: "free",
    snap: false,
    interval: 3000,
    arrows: true,
    pagination: false,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,
    captions   : true,    // Enable captions
 
    // Responsive breakpoint
    breakpoints: {
       768: {
          perPage: 1,
          snap: true
       }
    }
 });
 
 splide.mount();

 const secondSplide = new Splide("#second-slider", {
    // Optional parameters
    start: 1,
    perPage: 1,
    perMove: 1,
    gap: 20,
    type: "loop",
    drag: "free",
    snap: false,
    interval: 3000,
    arrows: true,
    pagination: false,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,
    captions   : true,    // Enable captions
 
    // Responsive breakpoint
    breakpoints: {
       768: {
          perPage: 1,
          snap: true
       }
    }
 });
 

 secondSplide.mount();


 const thirdSplide = new Splide("#third-slider", {
    // Optional parameters
    start: 1,
    perPage: 3,
    perMove: 1,
    gap: 30,
    type: "loop",
    drag: "free",
    snap: false,
    interval: 3000,
    arrows: true,
    pagination: false,
    rewind: true,
    rewindByDrag: true,
    lazyLoad: true,
    captions   : true,    // Enable captions
 
    // Responsive breakpoint
    breakpoints: {
       768: {
          perPage: 1,
          snap: true
       }
    }
 });
 

 thirdSplide.mount();


//modify control elements (prev & next arrows)
var nextControlElements = document.getElementsByClassName("splide__arrow splide__arrow--next");
var prevControlElements = document.getElementsByClassName("splide__arrow splide__arrow--prev");

// If there is only one element with this class, you can access it directly
var firstNextControlElement = nextControlElements[0];
var firstPrevControlElement = prevControlElements[0];

var secondNextControlElement = nextControlElements[1];
var secondPrevControlElement = prevControlElements[1];

var thirdNextControlElement = nextControlElements[2];
var thirdPrevControlElement = prevControlElements[2];

firstNextControlElement.innerHTML = `<i class="bi bi-arrow-right" style="color:#fff;"></i>`;
firstPrevControlElement.innerHTML = `<i class="bi bi-arrow-left" style="color:#000000;"></i>`;

secondNextControlElement.innerHTML = `<i class="bi bi-arrow-right" style="color:#00000;"></i>`;
secondPrevControlElement.innerHTML = `<i class="bi bi-arrow-left" style="color:#ffffff;"></i>`;

thirdNextControlElement.innerHTML = `<i class="bi bi-arrow-right" style="color:#fff;"></i>`;
thirdPrevControlElement.innerHTML = `<i class="bi bi-arrow-left" style="color:#000000;"></i>`;