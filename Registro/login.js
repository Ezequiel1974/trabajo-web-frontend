document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    var email = document.querySelector('.input-email').value;
    var password = document.querySelector('.input-password').value;

    if (email === 'admin@gmail.com' && password === '1234') 
    {
        localStorage.setItem("email", "admin@gmail.com")
        window.location = "../index.html"; 
    } 
    else 
    {
        alert('Invalid credentials.');
    }
});