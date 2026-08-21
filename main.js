/* =================================
   MENU REVEAL
================================= */

const menuSection =
    document.querySelector(".menu-section");


if (menuSection) {

    const menuObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        menuSection.classList.add(
                            "is-visible"
                        );

                        menuObserver.unobserve(
                            menuSection
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    menuObserver.observe(menuSection);

}
