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
/* =================================
   SIGNATURE REVEAL
================================= */

const signatureSection =
    document.querySelector(
        ".signature-section"
    );


if (signatureSection) {

    const signatureObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            signatureSection
                                .classList
                                .add(
                                    "is-visible"
                                );

                            signatureObserver
                                .unobserve(
                                    signatureSection
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    signatureObserver.observe(
        signatureSection
    );

}
