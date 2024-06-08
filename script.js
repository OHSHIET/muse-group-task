document.getElementById('submit-button').addEventListener('click', function(event) {

    let input = document.getElementById('email').value;

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        alert('Welcome to the team!');
    }
    else {
        alert('Email is invalid');
    }

});