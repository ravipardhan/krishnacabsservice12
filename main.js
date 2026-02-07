// Countdown Timer Logic
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset timer when it hits 0
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#countdown');
    startTimer(fiveMinutes, display);
};

// Form Submission (Simulated)
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Order Received! Our team will call you within 24 hours.");
    this.reset();
});