window.onscroll = function () {
    var header = document.querySelector("header");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add("headerFixed");
    } else {
        header.classList.remove("headerFixed");

    }

    var skillSection = document.querySelector(".skill");
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        skillSection.classList.add("skillAnimate");
        
    } else {
        skillSection.classList.remove("skillAnimate");

    }
}
