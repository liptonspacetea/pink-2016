var wrapper = document.querySelector(".slider__wrapper");
var btnLeft = document.querySelector(".slider__btn--left");
var btnRight = document.querySelector(".slider__btn--right");
var slide1 = document.querySelector(".slider__slide--slide-1");
var slide2 = document.querySelector(".slider__slide--slide-2");
var slide3 = document.querySelector(".slider__slide--slide-3");
var sliderController1 = document.querySelector("label[for=reviews-slide-1]");
var sliderController2 = document.querySelector("label[for=reviews-slide-2]");
var sliderController3 = document.querySelector("label[for=reviews-slide-3]");
var radioInput1 = document.querySelector("#reviews-slide-1");

radioInput1.removeAttribute("checked");
slide1.classList.add("slider__slide--current");
btnLeft.classList.add("slider__btn--disable");

//btnRight.addEventListener("click", function(event) {
//   event.preventDefault();
//    if (slide2.classList.contains("slider__slide--current")) {
//        wrapper.classList.remove("slider__wrapper--show-slide-2");
//        wrapper.classList.add("slider__wrapper--show-slide-3");
//        slide2.classList.remove("slider__slide--current");
//        slide3.classList.add("slider__slide--current");
//        btnRight.classList.add("slider__btn--disable");
//        } else {
//            if (slide3.classList.contains("slider__slide--current")) {
//                ;//do nothing
//            } else {
//                wrapper.classList.remove("slider__wrapper--show-slide-1");
//                wrapper.classList.add("slider__wrapper--show-slide-2");
//                slide1.classList.remove("slider__slide--current");
//                slide2.classList.add("slider__slide--current");
//                btnLeft.classList.remove("slider__btn--disable");
//            }
//        }
//});

btnRight.addEventListener("click", function(event) {
   event.preventDefault();
    if (slide1.classList.contains("slider__slide--current")) {
        wrapper.classList.add("slider__wrapper--show-slide-2");
        slide1.classList.remove("slider__slide--current");
        slide2.classList.add("slider__slide--current");
        btnLeft.classList.remove("slider__btn--disable");
    } else {
        wrapper.classList.remove("slider__wrapper--show-slide-2");
        wrapper.classList.add("slider__wrapper--show-slide-3");
        slide2.classList.remove("slider__slide--current");
        slide3.classList.add("slider__slide--current");
        btnRight.classList.add("slider__btn--disable");
    }
});

btnLeft.addEventListener("click", function(event) {
   event.preventDefault();
    if (slide3.classList.contains("slider__slide--current")) {
        wrapper.classList.remove("slider__wrapper--show-slide-3");
        wrapper.classList.add("slider__wrapper--show-slide-2");
        slide3.classList.remove("slider__slide--current");
        slide2.classList.add("slider__slide--current");
        btnRight.classList.remove("slider__btn--disable");
    } else {
        wrapper.classList.remove("slider__wrapper--show-slide-2");
//        wrapper.classList.add("slider__wrapper--show-slide-1");
        slide2.classList.remove("slider__slide--current");
        slide1.classList.add("slider__slide--current");
        btnLeft.classList.add("slider__btn--disable");
    }
});



