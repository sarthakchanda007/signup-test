document.addEventListener('DOMContentLoaded', function() {
    // Create twinkling stars
    const starsContainer = document.getElementById('stars');
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration (3-6 seconds)
        const duration = Math.random() * 3 + 3;
        star.style.setProperty('--duration', `${duration}s`);
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }

    // Form validation
    const form = document.getElementById('signupForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    
    togglePassword.addEventListener('click', function() {
        togglePasswordVisibility(password, togglePassword);
    });
    
    toggleConfirmPassword.addEventListener('click', function() {
        togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
    });
    
    function togglePasswordVisibility(field, icon) {
        if (field.type === 'password') {
            field.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            field.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
    
    // Real-time validation
    fullName.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validateConfirmPassword);
    
    function validateName() {
        const name = fullName.value.trim();
        const nameRegex = /^[a-zA-Z\s]+$/;
        
        if (name === '') {
            setError(fullName, nameError, 'Name is required');
            return false;
        } else if (!nameRegex.test(name)) {
            setError(fullName, nameError, 'Name should contain only letters');
            return false;
        } else {
            setSuccess(fullName, nameError);
            return true;
        }
    }
    
    function validateEmail() {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            setError(email, emailError, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            setError(email, emailError, 'Please enter a valid email');
            return false;
        } else {
            setSuccess(email, emailError);
            return true;
        }
    }
    
    function validatePassword() {
        const passwordValue = password.value;
        
        if (passwordValue === '') {
            setError(password, passwordError, 'Password is required');
            return false;
        } else if (passwordValue.length < 8) {
            setError(password, passwordError, 'Password must be at least 8 characters');
            return false;
        } else {
            setSuccess(password, passwordError);
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPassword.value;
        const passwordValue = password.value;
        
        if (confirmPasswordValue === '') {
            setError(confirmPassword, confirmPasswordError, 'Please confirm your password');
            return false;
        } else if (confirmPasswordValue !== passwordValue) {
            setError(confirmPassword, confirmPasswordError, 'Passwords do not match');
            return false;
        } else {
            setSuccess(confirmPassword, confirmPasswordError);
            return true;
        }
    }
    
    function setError(field, errorElement, message) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        errorElement.textContent = message;
    }
    
    function setSuccess(field, errorElement) {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorElement.textContent = '';
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            // Form is valid, you can submit it here
            alert('Form submitted successfully!');
            // form.submit(); // Uncomment to actually submit the form
        } else {
            // Scroll to the first error
            const firstError = document.querySelector('.invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
    
    // Social buttons functionality
    const phoneBtn = document.querySelector('.phone-btn');
    const googleBtn = document.querySelector('.google-btn');
    
    phoneBtn.addEventListener('click', function() {
        alert('Phone signup functionality would go here');
    });
    
    googleBtn.addEventListener('click', function() {
        alert('Google signup functionality would go here');
    });
});