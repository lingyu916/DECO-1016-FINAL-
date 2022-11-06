// Create a variable to reference the toggle <button>
const navbarToggle = navbar.querySelector("#navbar-toggle");

// Create a variable to reference the nav menu container <div>
const navbarMenu = document.querySelector("#navbar-menu");

// Create a variable to reference the <ul> list of nav links
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

// Add or remove the 'active' class on the toggle <button> when clicked
navbarToggle.addEventListener("click", () => {navbarToggle.classList.toggle('active')});


// Remove the 'active' class on the menu container <div> when clicked 
// This will close the menu if the user clicks outside the nav link <ul>
navbarMenu.addEventListener("click", () => {navbarToggle.classList.remove('active')});

// Stop clicks on the navbar links from toggling the menu (for when it's not mobile)
navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());

