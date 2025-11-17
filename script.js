// const firebaseProjectUrl = 'https://comp101-js-alice-default-rtdb.firebaseio.com/';

const firebaseProjectUrl = 'https://comp101-lab8-kyle-default-rtdb.firebaseio.com/';

const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // When the button is clicked, call submitForm.

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();  // ← fixed
    const message = document.getElementById('your-message').value.trim();

    if (name || message || email) {
        const data = { name, email, message };  // ← include email

        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (!response.ok) { 
                throw new Error('Failed to send message');
            }

            showThanksAlert();
        } catch (error) {
            console.error('Error when sending message:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
}


