document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        const navMenu = document.getElementById("navMenu");
        navMenu.classList.toggle("active");
    }

    document.querySelector(".hamburger").addEventListener("click", toggleMenu);

    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            let navbarHeight = document.querySelector("header").offsetHeight;
            let offsetTop = target.offsetTop - navbarHeight - 10; // Sesuaikan dengan tinggi navbar

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });

            document.getElementById("navMenu").classList.remove("active");
        });
    });
});
