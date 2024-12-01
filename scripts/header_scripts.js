// Toggle the navigation menu visibility (for mobile)
function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleSearch() {
  const searchIcon = document.querySelector('.search-icon');
  const searchBox = document.querySelector('.search-box');
  
  // Toggle the visibility of the search box and icon
  searchBox.classList.toggle('active');
  
  // Hide or show the search icon based on the input box state
  if (searchBox.classList.contains('active')) {
    searchIcon.style.display = 'none'; // Hide search icon
  } else {
    searchIcon.style.display = 'inline-block'; // Show search icon
  }
}
