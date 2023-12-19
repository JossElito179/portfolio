const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

document.onreadystatechange = function () {
    var spinnerOverlay = document.querySelector('.page_loader');

    if (document.readyState === 'complete') {
        spinnerOverlay.style.display = 'none';
    }
};
