// =====================================
// PESAT - INTERACTIVE JAVASCRIPT
// =====================================


// 1. MENU NAVIGASI HP

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

});


// 2. TUTUP MENU SETELAH TAUTAN DIPILIH

document.querySelectorAll(".nav-link, .nav-button").forEach(
    function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Buka menu"
            );

        });

    }
);


// 3. TAHUN OTOMATIS DI FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();


// 4. NAVIGASI AKTIF SESUAI BAGIAN YANG DIBUKA

const sections = document.querySelectorAll(
    "main section[id], article[id]"
);

const links = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                links.forEach(function (link) {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    );

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


// Jalankan pengamatan pada setiap bagian halaman

sections.forEach(function (section) {

    observer.observe(section);

});