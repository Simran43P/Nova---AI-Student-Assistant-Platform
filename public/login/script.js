const container = document.querySelector('.container');
const regiserBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

regiserBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// ✅ Add this new function at the bottom
function redirectToDashboard(event) {
    // Prevents the form from refreshing
    event.preventDefault();

    // Later you can add login validation here
    window.location.href = "/dashboard"; 
}