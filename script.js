function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("active");

    var closeBtn = document.querySelector(".close-menu");
    if (menu.classList.contains("active")) {
        closeBtn.style.display = "block";
    } else {
        closeBtn.style.display = "none";
    }
}