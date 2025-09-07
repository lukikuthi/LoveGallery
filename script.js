/*Project developed by Lucas (github.com/lukikuthi)*/
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

/* Exibir slides */
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

/* Botão de avançar */
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = "scale(1.3)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 200);
        
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});

/* Exibir primeiro slide */
showSlide(currentSlide);
