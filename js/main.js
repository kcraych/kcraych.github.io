
$(document).ready(() => {
    $("#nav-placeholder").load("nav.html");
});



function myFunction() {
    var x = document.getElementById("my-menu-collapse");
    if (x.className === "nav-menu-content") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu-content";
    }
}