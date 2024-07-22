
// Function to toggle navigation menu
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// Function to validate contact form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return false;
  }

  return true;
}

// Event listeners
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
document.querySelector('form').addEventListener('submit', validateForm);