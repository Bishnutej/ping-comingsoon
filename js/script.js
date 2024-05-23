// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.submit');
    const emailInput = document.querySelector('.email');
    const error1 = document.querySelector('.error1');
    const error2 = document.querySelector('.error2');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value;
      if (validateEmail(email)) {
        // If email is valid, you can add further actions here, such as sending data to server
        error1.style.display = 'none';
        error2.style.display = 'none';
        alert('Thank you for subscribing!');
      } else {
        error1.style.display = 'block';
      }
    });
  
    emailInput.addEventListener('input', () => {
      if (validateEmail(emailInput.value)) {
        error1.style.display = 'none';
        error2.style.display = 'none';
      }
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }
  });
  