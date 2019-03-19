$(document).ready(() => {
    $("#nav-placeholder").load("nav.html");
});

$(document).ready(() => {
    $("#main-placeholder").load("home.html");
});

function navClick(page) {
    $("#main-placeholder").load(page + ".html");
}
