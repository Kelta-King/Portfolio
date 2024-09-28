document.querySelector(".contact-button").onclick = function(event) {
    event.preventDefault(); // Prevent default form submission behavior    
    this.classList.toggle("clicked");
    const val = document.querySelector(".contact-button p").innerText;
    document.querySelector(".contact-button p").innerText = val === "Sent!"? "Send" : "Sent!";
}