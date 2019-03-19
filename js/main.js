$(document).ready(() => {
    $("#nav-placeholder").load("nav.html");
});

$(document).ready(() => {
    $("#main-placeholder").load("home.html");
});

$(document).ready(() => {
    document.getElementByClassName("menu-item").on('click',function (){
        var idClicked = jQuery(this).attr('id');
        $("#main-placeholder").load(idClicked + ".html");
    });
}); 
