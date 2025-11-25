let locks = document.querySelectorAll(".lock");
locks.forEach((lock) => {
    lock.addEventListener("click", () => {
        // Lấy input ngay trước icon trong cùng wrapper
        const passwordInput = lock.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            lock.classList.remove('fa-lock');
            lock.classList.add('fa-lock-open');
        } else {
            passwordInput.type = 'password';
            lock.classList.remove('fa-lock-open');
            lock.classList.add('fa-lock');
        }
    });
});



// Check email
let submitBtn = document.querySelector(".auth-btn");
let emailInput = document.getElementById("email");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (regex.test(email)) {
        window.location.href = "home.html";
    } else {
        alert("Email không hợp lệ");
    }
});
