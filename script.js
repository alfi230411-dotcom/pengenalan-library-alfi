// =====================================
// PESAT — WEBSITE INTERACTION
// =====================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup navigasi" : "Buka navigasi"
    );

});


// 2. CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-link, .nav-cta").forEach(
    function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Buka navigasi"
            );

        });

    }
);


// 3. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 4. ACTIVE NAVIGATION

const sections = document.querySelectorAll(
    "main section[id], article[id]"
);

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) return;

            navLinks.forEach(function (link) {

                const target = link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    target === "#" + entry.target.id
                );

            });

        });

    },

    {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    }

);

sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// 5. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", function (event) {

    const clickedInsideMenu = navMenu.contains(event.target);

    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


// 6. CLOSE MENU WHEN WINDOW RESIZES TO DESKTOP

window.addEventListener("resize", function () {

    if (window.innerWidth > 760) {

        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


// 7. SMOOTH SCROLL FOR INTERNAL LINKS

document.querySelectorAll('a[href^="#"]').forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);

            }

        });

    }
);