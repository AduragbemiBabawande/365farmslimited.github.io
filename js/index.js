


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

// When the user clicks on any button, open the related modal
document.querySelectorAll('.box-btn').forEach(btn => {
  btn.onclick = function() {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
document.querySelectorAll('.close').forEach(span => {
  span.onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
});

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}



const sr = ScrollReaveal({
  origin: 'top',
  distance:'60px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.about-data`, {origin: 'left'});
sr.reveal(`.about-img`, {origin: 'right'});


window.addEventListener('scroll', function() {
  var whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    var windowBottom = window.innerHeight + window.pageYOffset;
    var btnBottom = whatsappBtn.getBoundingClientRect().bottom + window.pageYOffset;
    var distanceToBottom = windowBottom - btnBottom;
    
    if (distanceToBottom > 20) { /* Adjust the threshold as needed */
      whatsappBtn.style.transform = 'translateY(' + distanceToBottom + 'px)';
    } else {
      whatsappBtn.style.transform = 'translateY(0)';
    }
  }
});

