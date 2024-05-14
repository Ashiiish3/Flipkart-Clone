let images = document.querySelectorAll(".slides > img");
let prevButton = document.querySelector(".prev")
let nextButton = document.querySelector(".next")
let dots = document.querySelectorAll(".dots")
let counter = 0;
images.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`
})
nextButton.addEventListener("click", ()=>{
    counter++;
    carousel();
    slidePoint()
})
prevButton.addEventListener("click", ()=>{
    counter--;
    carousel();
    slidePoint()
})
const carousel = () =>{
    if(counter === images.length){
        counter = 0;
    }
    if(counter < 0){
        counter = images.length - 1;
    }
    images.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
let stopCarousel;
function autoSlider(){
    stopCarousel = setInterval(() => {
        counter++;
        carousel()
        slidePoint()
    }, 2000);
    
}
autoSlider()
images.forEach(slide=>{
    slide.addEventListener("mouseover", ()=>{
        clearInterval(stopCarousel)
    })
})
images.forEach(slide=>{
    slide.addEventListener("mouseout", autoSlider)
})
function slidePoint(){
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
    }
    dots[counter].className += " active"
}