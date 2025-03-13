document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("response-message").innerText = "Thank you, " + name + "! Your message has been sent.";
        this.reset();
    } else {
        document.getElementById("response-message").innerText = "Please fill out all fields.";
    }
});
