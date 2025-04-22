// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Event Handling 🎈

  // Button click
  const clickBtn = document.getElementById('click-btn');
  clickBtn.addEventListener('click', () => {
    alert('Button clicked!');
  });

  // Hover effects
  const hoverBox = document.getElementById('hover-box');
  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.classList.add('hovered');
  });
  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.classList.remove('hovered');
  });

  // Keypress detection
  const keypressResult = document.getElementById('keypress-result');
  document.addEventListener('keydown', (event) => {
    keypressResult.textContent = `You pressed: ${event.key}`;
  });

  // Bonus: Secret action for double-click or long press
  const secretBtn = document.getElementById('secret-btn');
  const secretResult = document.getElementById('secret-action-result');
  let longPressTimer;

  secretBtn.addEventListener('dblclick', () => {
    secretResult.textContent = 'You have triggered! 🎉 the double click action';
    secretResult.style.color = '#27ae60';
  });

  secretBtn.addEventListener('mousedown', () => {
    longPressTimer = setTimeout(() => {
      secretResult.textContent = 'You have triggered! 🎉 the long press action 🔥';
      secretResult.style.color = '#e67e22';
    }, 1000); // 1 second long press
  });

  secretBtn.addEventListener('mouseup', () => {
    clearTimeout(longPressTimer);
  });

  secretBtn.addEventListener('mouseleave', () => {
    clearTimeout(longPressTimer);
  });

  // 2. Interactive Elements 🎮

  // Button that changes text or color
  const colorTextBtn = document.getElementById('color-text-btn');
  let toggle = false;
  colorTextBtn.addEventListener('click', () => {
    if (!toggle) {
      colorTextBtn.textContent = 'changed text';
      colorTextBtn.style.backgroundColor = '#e74c3c';
      colorTextBtn.classList.add('pulse-animation');
    } else {
      colorTextBtn.textContent = 'Change my text or color';
      colorTextBtn.style.backgroundColor = '#3498db';
      colorTextBtn.classList.remove('pulse-animation');
    }
    toggle = !toggle;
  });

  // Image gallery / slideshow
  const galleryImages = document.querySelectorAll('.gallery-image');
  const prevImageBtn = document.getElementById('prev-image');
  const nextImageBtn = document.getElementById('next-image');
  let currentImageIndex = 0;

  function showImage(index) {
    galleryImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevImageBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
  });

  nextImageBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
  });

  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.toggle('active', btn === button));
      tabContents.forEach(content => content.classList.toggle('active', content.id === targetTab));
    });
  });

  // 3. Form Validation 📋✅
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const formSuccess = document.getElementById('form-success');

  // Helper function to validate email format
  function isValidEmail(email) {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Real-time feedback while typing (bonus)
  emailInput.addEventListener('input', () => {
    if (!emailInput.value) {
      emailError.textContent = 'Email is required.';
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email.';
    } else {
      emailError.textContent = '';
    }
  });

  passwordInput.addEventListener('input', () => {
    if (!passwordInput.value) {
      passwordError.textContent = 'Password is required.';
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
      passwordError.textContent = '';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    // Validate email
    if (!emailInput.value) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email.';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    // Validate password
    if (!passwordInput.value) {
      passwordError.textContent = 'Password is required.';
      valid = false;
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
      valid = false;
    } else {
      passwordError.textContent = '';
    }

    if (valid) {
      formSuccess.textContent = 'Form submitted successfully! 🎉';
      form.reset();
    } else {
      formSuccess.textContent = '';
    }
  });
});
