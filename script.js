// Content container in which each page is loaded into.
const targetElement = document.querySelector(".content-container");

// Get all navbar buttons
const aboutMeButton = document.getElementById("about-me-button");
const portfolioButton = document.getElementById("portfolio-button");
const resourcesButton = document.getElementById("resources-button");

// Load about-me page by default.
fetch(`./pages/about-me.html`)
    .then((res) => {
        if (res.ok) {
            return res.text();
        }
    })
    .then((pageHTML) => {
        // If OK, then load HTML and animate.
        targetElement.innerHTML = pageHTML;
        targetElement.animate(
            {
                opacity: [0, 1],
            },
            {
                duration: 200,
                complete: setElementOpacity1(targetElement),
            }
        );
        aboutMeButton.classList.add("navbar-button-selected");
    });

// Function to set element opacity to 1.
const setElementOpacity1 = (targetElement) => {
    targetElement.style.opacity = 1;
};

// Load page on navbar button press.
const loadPage = (fileNum) => {
    // Remove selected button styles.
    aboutMeButton.classList.remove("navbar-button-selected");
    portfolioButton.classList.remove("navbar-button-selected");
    resourcesButton.classList.remove("navbar-button-selected");

    let fileName = "";
    let activeButton;

    // Select file associated with number. Defined in index.
    switch (fileNum) {
        case 0:
            fileName = "about-me";
            activeButton = aboutMeButton;
            break;
        case 1:
            fileName = "portfolio";
            activeButton = portfolioButton;
            break;
        case 2:
            fileName = "resources";
            activeButton = resourcesButton;
            break;
        default:
            console.log("No file associated with that number.");
            break;
    }

    // Fetch file
    fetch(`./pages/${fileName}.html`)
        .then((res) => {
            if (res.ok) {
                return res.text();
            }
        })
        .then((pageHTML) => {
            // If OK, then load HTML.
            targetElement.innerHTML = pageHTML;

            // Add selected button styles to selected page.
            activeButton.classList.add("navbar-button-selected");

            // Fade loaded content in.
            targetElement.animate(
                {
                    opacity: [0, 1],
                },
                {
                    duration: 200,
                    complete: setElementOpacity1(targetElement),
                }
            );
        });
};
