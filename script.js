
window.onscroll = function() {
    var header = document.getElementById("myHeader");
    var sections = document.getElementsByClassName("header animate");
    var scrollPosition = window.pageYOffset;

    if (scrollPosition > 50) {
        header.style.backgroundColor = "rgba(26, 115, 232, 0.7)";
    } else {
        header.style.backgroundColor = "rgba(26, 115, 232, 1)";
    }

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionRect = section.getBoundingClientRect();
        var sectionMiddle = sectionRect.top + sectionRect.height / 2;

        if (scrollPosition > sectionMiddle - window.innerHeight / 2) {
            section.style.transform = "translateX(0)";
        } else {
            section.style.transform = "translateX(-100%)";
        }
    }
}

