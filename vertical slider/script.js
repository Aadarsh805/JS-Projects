const slideContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slider");
const leftSlide = document.querySelector(".left-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength -1)* 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) =>{
    const sliderHeight = slideContainer.clientHeight;

    if(direction === "up"){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0;
        }
    }else if(direction === "down"){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength -1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
