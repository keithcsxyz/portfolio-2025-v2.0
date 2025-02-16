/////////////////////////////////FOR LETTER BY LETTER TYPING EFFECT////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const text = "Keith";
    const speed = 100; // Speed of typing (in milliseconds)
    const delay = 1000; // Delay before repeating (1 second)
    let index = 0;
    let isDeleting = false;
    const textElement = document.getElementById("welcome-text");

    function typeEffect() {
        if (!isDeleting) {
            textElement.innerHTML = text.slice(0, index + 1);
            index++;
            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeEffect, delay); // Pause before deleting
                return;
            }
        } else {
            textElement.innerHTML = text.slice(0, index - 1);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeEffect, speed);
    }

    typeEffect(); // Start animation
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////