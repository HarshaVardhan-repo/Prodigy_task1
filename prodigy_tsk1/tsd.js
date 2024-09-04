const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    const imageWidth = carouselImages.children[0].clientWidth;
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});
