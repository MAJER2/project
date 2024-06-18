
function ndryshoGjuhen(gjuha) {
    // Correct method to get element by ID
    const shqip = document.getElementById("Shqip");
    const anglisht = document.getElementById("English");
    const italisht = document.getElementById("Italian");

    // Check if the elements exist before proceeding
    if (shqip && anglisht && italisht) {
        // Add class 'padukshme' to hide all sections
        shqip.classList.add("padukshme");
        anglisht.classList.add("padukshme");
        italisht.classList.add("padukshme");

        // Remove class 'padukshme' to show the selected language section
        if (gjuha === 'sq') {
            shqip.classList.remove("padukshme");
        } else if (gjuha === 'en') {
            anglisht.classList.remove("padukshme");
        } else if (gjuha === 'it') {
            italisht.classList.remove("padukshme");
        }
    } else {
        console.error("One or more elements with the specified IDs do not exist.");
    }
}

function ndryshoGjuhen1(gjuha) {
    // Correct method to get element by ID
    const shqip = document.getElementById("Shqip1");
    const anglisht = document.getElementById("English1");
    const italisht = document.getElementById("Italian1");

    // Check if the elements exist before proceeding
    if (shqip && anglisht && italisht) {
        // Add class 'padukshme' to hide all sections
        shqip.classList.add("padukshme");
        anglisht.classList.add("padukshme");
        italisht.classList.add("padukshme");

        // Remove class 'padukshme' to show the selected language section
        if (gjuha === 'sq') {
            shqip.classList.remove("padukshme");
        } else if (gjuha === 'en') {
            anglisht.classList.remove("padukshme");
        } else if (gjuha === 'it') {
            italisht.classList.remove("padukshme");
        }
    } else {
        console.error("One or more elements with the specified IDs do not exist.");
    }
}



/*function ndryshoGjuhen1(gjuha) {
   
    
    
    const shqip1 = document.getElementsById("Shqip1");
    const anglisht1 = document.getElementsById("English1");
    const italisht1 = document.getElementsById("Italian1");
  
    shqip1.classList.add("padukshme");
    anglisht1.classList.add("padukshme");
    italisht1.classList.add("padukshme");
  
    if (gjuha === 'sq') {
        shqip1.classList.remove("padukshme");
    } else if (gjuha === 'en') {
       anglisht.classList.remove("padukshme");
    } else if (gjuha === 'it') {
      italisht.classList.remove("padukshme");
    }
}*/












document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get form values
        const name = document.getElementById('inputName').value.trim();
        const surname = document.getElementById('inputSurname').value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const phone = document.getElementById('inputPhone').value.trim();
        const address = document.getElementById('inputAddress').value.trim();
        const message = document.getElementById('inputMessage').value.trim();

        // Validate form fields
        let isValid = true;
        let errorMessage = '';

        if (name === '') {
            isValid = false;
            errorMessage += 'Emri është i detyrueshëm.\n';
        }

        if (surname === '') {
            isValid = false;
            errorMessage += 'Mbiemri është i detyrueshëm.\n';
        }

        if (email === '') {
            isValid = false;
            errorMessage += 'Emaili është i detyrueshëm.\n';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Ju lutem shkruani një email të vlefshëm.\n';
        }

        if (phone === '') {
            isValid = false;
            errorMessage += 'Numri Telefonit është i detyrueshëm.\n';
        } else if (!validatePhone(phone)) {
            isValid = false;
            errorMessage += 'Ju lutem shkruani një numër telefoni të vlefshëm.\n';
        }

        if (address === '') {
            isValid = false;
            errorMessage += 'Adresa është e detyrueshme.\n';
        }

        if (message === '') {
            isValid = false;
            errorMessage += 'Mesazhi juaj është i detyrueshëm.\n';
        }

        // Show error message or submit the form
        if (!isValid) {
            alert(errorMessage);
        } else {
            // If the form is valid, you can submit it here
            // e.g., form.submit();
            alert('Formulari u dërgua me sukses!');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\+?\d{10,}$/;
        return re.test(phone);
    }
});


