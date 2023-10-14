document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var emailInput = document.getElementById('email');
    var message = document.getElementById('message');

    if (emailInput.checkValidity()) {
        message.textContent = 'Thank you for your message! We will get in touch soon.';
        message.style.color = 'green';
        emailInput.value = '';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});
