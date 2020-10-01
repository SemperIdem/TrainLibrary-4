import $ from '../core';


$.prototype.carousel = function() {
    console.log('whatf ' + this.html());
    for (let i = 0; i < this.length; i++) {
        console.log('what ' + this.length);
        console.log('what ' + this[i]);
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item')
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li')
        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });
        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).onClick((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(${-offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            }
            else {
                slideIndex++
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).onClick((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(${-offset}px)`;

            
            if (slideIndex == 0) {
                slideIndex = slides.length - 1
            }
            else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).onClick(e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            console.log(slideTo);

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesField.style.transform = `translateX(${-offset}px)`; 
            dots.forEach(dot => dot.classList.remove('active'));;
            dots[slideIndex].classList.add('active');
        });
    }

};


$('.carousel').carousel();
