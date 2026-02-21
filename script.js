document.getElementById("contactForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
    } 
    else if (!email.includes("@")) {
        alert("Enter valid email!");
    } 
    else {

        // Save data in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        alert("Message Sent Successfully & Data Saved!");

        document.getElementById("contactForm").reset();
    }

});

// Load saved data on refresh
window.onload = function() {
    let savedName = localStorage.getItem("userName");
    let savedEmail = localStorage.getItem("userEmail");

    if (savedName && savedEmail) {
        document.getElementById("name").value = savedName;
        document.getElementById("email").value = savedEmail;
    }
}