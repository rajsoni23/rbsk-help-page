document.addEventListener("DOMContentLoaded", () => {

    const coffeeBtn =
        document.getElementById("coffeeBtn");

    coffeeBtn.addEventListener("click", () => {

        window.open(
            "https://buymeacoffee.com/",
            "_blank"
        );

    });

    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener("click", e => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            });

        });

});