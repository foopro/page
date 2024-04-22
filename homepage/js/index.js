//Typed.js
var typed = new Typed('#hi', {
    strings: [
        "xhy",
        "from anhui, China.",
        "a university student.",
        "......?"
    ],
    typeSpeed: 100,
    loop: true,
});

//Nav links
function goHome() {
    $("#Home").addClass("nav-active");
    $("#Subject").removeClass("nav-active");
    $("#Course").removeClass("nav-active");
    $("#Experience").removeClass("nav-active");
    $("#home").show();
    $("#subject").hide();
    $("#course").hide();
    $("#experience").hide();
}

function goSub() {
    $("#Home").removeClass("nav-active");
    $("#Subject").addClass("nav-active");
    $("#Course").removeClass("nav-active");
    $("Experience").removeClass("nav-active");
    $("#home").hide();
    $("#subject").show();
    $("#course").hide();
    $("#experice").hide();
}

function goCourse() {
    $("#Home").removeClass("nav-active");
    $("#Subject").removeClass("nav-active");
    $("#Course").addClass("nav-active");
    $("#Experience").removeClass("nav-active");
    $("#home").hide();
    $("#subject").hide();
    $("#course").show();
    $("#experience").hide();
}

function goExp() {
    $("#Home").removeClass("nav-active");
    $("#Subject").removeClass("nav-active");
    $("#Course").removeClass("nav-active");
    $("#Experience").addClass("nav-active");
    $("#home").hide();
    $("#subject").hide();
    $("#course").hide();
    $("#experience").show();
}
