
// Select elements
const heroH1 = document.querySelector('#hero h1');
const heroP = document.querySelector('#hero p');
const servicesH2 = document.querySelector('#services h2');
const orderH2 = document.querySelector('#order h2');
const paymentH2 = document.querySelector('#payment h2');
const servicesTable = document.querySelector('#services table');
const orderButton = document.querySelector('#order button');
const paymentForm = document.querySelector('#payment form');

// Add event listeners


paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Code for payment form submission
});
function showMessage() {
  alert('Coming, Soon!');
}

// Animations
heroH1.classList.add('fadeIn');
heroP.classList.add('fadeIn');
servicesH2.classList.add('fadeIn');
orderH2.classList.add('fadeIn');
paymentH2.classList.add('fadeIn');
servicesTable.classList.add('slideIn');
orderButton.classList.add('slideIn');
paymentForm.classList.add('slideIn');



