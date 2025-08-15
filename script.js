// JavaScript for toggling mini-cards and contact form 

// Contact form feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-message').style.display = 'block';
    this.reset();
});

// Toggle mini-cards for each country
document.querySelectorAll('.show-cities-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var targetId = btn.getAttribute('data-target');
        var miniCards = document.getElementById(targetId);
        miniCards.classList.toggle('hidden');
        // Optionally, change button text
        if (miniCards.classList.contains('hidden')) {
            btn.textContent = "Places to visit in " + btn.closest('.card').querySelector('h2').textContent;
        } else {
            btn.textContent = "Hide cities";
        }
    });
});
