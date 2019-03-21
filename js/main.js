$(document).ready(() => {
    $("#nav-placeholder").load("nav.html");
});

$(document).ready(() => {
    $("#full-placeholder").load("home.html");
});

function navClick(page) {
    $("#full-placeholder").load(page + ".html");
    var classUpdate = "container-full"
    if (page != "home") {
        var classUpdate = classUpdate + " bg-dk-gray"
    }
    document.getElementById("full-placeholder").className = classUpdate;
}
