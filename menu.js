
/* =================================
   MENU ELEMENTS
================================= */

const categoryButtons =
    document.querySelectorAll(".menu-category");

const menuGrid =
    document.querySelector(".menu-grid");
/* =================================
   RENDER MENU
================================= */

function renderMenu(category) {

    const dishes = menuItems[category];

    if (!dishes || !menuGrid) return;


    menuGrid.classList.add("is-changing");


    setTimeout(() => {

        menuGrid.innerHTML = dishes
            .map((dish, index) => {

                const sizeClass =
                    index === 0
                        ? "menu-card menu-card--large"
                        : "menu-card";

                return `

                    <article
                        class="${sizeClass}"
                    >

                        <a
                            href="#"
                            class="menu-card__image"
                            aria-label="View ${dish.name}"
                        >

                            <img
                                src="${dish.image}"
                                alt="${dish.name}"
                                loading="lazy"
                            >

                            <span
                                class="menu-card__view"
                            >
                                View
                            </span>

                        </a>


                        <div
                            class="menu-card__content"
                        >

                            <div>

                                <h3
                                    class="menu-card__name"
                                >
                                    ${dish.name}
                                </h3>

                                <p
                                    class="menu-card__description"
                                >
                                    ${dish.description}
                                </p>

                            </div>

                            <span
                                class="menu-card__price"
                            >
                                ${dish.price}
                            </span>

                        </div>

                    </article>

                `;

            })
            .join("");


        menuGrid.classList.remove(
            "is-changing"
        );

    }, 250);

}
/* =================================
   CATEGORY SWITCHING
================================= */

categoryButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                (item) => {

                    item.classList.remove(
                        "is-active"
                    );

                    item.setAttribute(
                        "aria-selected",
                        "false"
                    );

                }
            );


            button.classList.add(
                "is-active"
            );

            button.setAttribute(
                "aria-selected",
                "true"
            );


            const category =
                button.textContent
                    .trim()
                    .toLowerCase();


            renderMenu(category);

        }
    );

});
/* =================================
   INITIAL MENU
================================= */

renderMenu("antipasti");
