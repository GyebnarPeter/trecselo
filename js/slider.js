const slider = document.querySelector(".slider");
const sliderHeader = document.querySelector(".slider h2");
const sliderArrow = document.querySelector(".slider-arrow");
const cup = document.querySelector(".slider-cup");

slider.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cup.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`; 
    sliderHeader.style.transform = `translateY(${yAxis / 2}px) translateX(${xAxis / 2}px)`;
    sliderArrow.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
});