window.onscroll = function(event) {
    if(window.scrollY >= window.innerHeight) {
        console.log("Sticky");
        document.getElementById("navBar").classList.add("sticky");
    }
    else {
        console.log("Sticky remove");
        document.getElementById("navBar").classList.remove("sticky");
    }
}