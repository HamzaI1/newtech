let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const textContent = slides[currentSlide].querySelector('.text-content');

  // Hide the current slide and reset animation
  slides[currentSlide].classList.remove('active');
  textContent.classList.remove('animate'); // Reset animation

  // Update the current slide index
  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  // Show the new slide
  slides[currentSlide].classList.add('active');
  const newTextContent = slides[currentSlide].querySelector('.text-content');
  
  // Reapply the animation after the slide change
  setTimeout(() => {
    newTextContent.classList.add('animate');
  }, 100); // Trigger animation with a small delay for smoothness

  // Update the active dot
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Automatically change slides every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Change to a specific slide when clicking a dot
function changeSlideTo(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // Hide the current slide and reset animation
  slides[currentSlide].classList.remove('active');
  const textContent = slides[currentSlide].querySelector('.text-content');
  textContent.classList.remove('animate'); // Reset animation

  // Update the current slide index
  currentSlide = index;

  // Show the new slide
  slides[currentSlide].classList.add('active');
  const newTextContent = slides[currentSlide].querySelector('.text-content');
  
  // Reapply the animation after the slide change
  setTimeout(() => {
    newTextContent.classList.add('animate');
  }, 100); // Trigger animation with a small delay for smoothness

  // Update the active dot
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Initial animation trigger after page load
document.addEventListener("DOMContentLoaded", () => {
  const textContent = document.querySelector(".text-content");
  setTimeout(() => {
    textContent.classList.add("animate");
  }, 500); // Initial delay for animation
});
