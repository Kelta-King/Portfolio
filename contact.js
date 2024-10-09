async function sendPost() {
    const xhttp = new XMLHttpRequest();

    const response = await new Promise((resolve, reject) => {
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    console.log("Resolve");
                    resolve(this.responseText);
                } else {
                    console.log("Reject");
                    reject('Error: ' + this.status);
                }
            }
            else {
                console.log("Not ready yet");
            }
        };

        xhttp.open("POST", "https://formsubmit.co/keltaking999@gmail.com", true);

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const params = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);
    });
    console.log("Response: " + JSON.stringify(response));
    return response;
}

document.querySelector(".contact-button").onclick = async function (event) {
    event.preventDefault(); 
    this.classList.toggle("clicked");
    const val = document.querySelector(".contact-button p").innerText;
    if(val === "Sent!") {
        document.querySelector(".contact-button p").innerText = "Send" 
    }
    else { 
        console.log(document.querySelector(".contact-form"));
        
        document.querySelector(".contact-form").submit();
        // event.target.submit();
        document.querySelector(".contact-button p").innerText = "Sent!";
    }
}