/////////////////////////////////FOR LETTER BY LETTER TYPING EFFECT////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const text = "&lt;Keith&sol;&gt;";
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




////////CONTACT FORMM//////////////
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz9S1iTmTLJ0LGXvGlprsHXvbk1NtbNbQhQZV0IIyGWq3gnrhbbyKByr6o5p1ex1G4vrA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for reaching out. I'll get back to you soon."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000) //aftyer 5 seconds mnawawara
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


/////////////////////////////////////////





//////////////////COPY NUMBERRRR/////////////
    function copyToClipboard(number) {
        navigator.clipboard.writeText(number);
        alert("Copied: " + number);
    }

///////////////////////////////////////
