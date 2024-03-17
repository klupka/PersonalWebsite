import retroCalculatorImg from "../resources/calculatorImageZoomed.png";
import libraryImg from "../resources/mernLibraryImageZoomed.png";
import weatherImg from "../resources/weatherWebAppImageZoomed.png";

export const projects = [
    {
        title: "Retro Calculator",
        description:
            "A calculator web app featuring a custom-designed user interface that evokes a nostalgic feel of the 1970s era while also including some modern additions. Developed using Vite + React, this project was undertaken without relying on any calculator-related tutorials or guides, representing a self-imposed challenge.",
        date: "March 2024",
        note: "",
        githubLink: "https://github.com/klupka/RetroCalculator",
        imageURL: retroCalculatorImg,
        liveLink: "https://klupka.github.io/RetroCalculator/",
        usage: "To maintain authenticity, the calculator features a limited display capacity. This trait is reminiscent of older calculators (~1970s), which served as inspiration. Calculation results are fixed to 4 decimal places and if a number exceeds 7 characters it is converted to scientific notation. If a number's power exceeds 99, the calculator will return an error (e.g., 2.3e+102 -> ERROR). At this point the number is too large...",
    },
    {
        title: "Library",
        description:
            "An application for managing a library, enabling users to add, modify, and remove books. Uses MERN stack (MongoDB, Express.js, React.js, Node.js). Developed with a focus on learning full stack operations.",
        date: "February 2024",
        note: "There may be a brief 1-minute loading time for this application.",
        githubLink: "https://github.com/klupka/Library",
        imageURL: libraryImg,
        liveLink: "https://sethklupka-library.netlify.app/",
        usage: "Upon launching the application, saved books are shown in either a table or card view. Each book has options for Details, Edit, and Delete functionalities. Details offer additional information, Edit allows modifications, and Delete removes the book. New books can be added via the green button located at the top right corner.",
    },
    {
        title: "Weather",
        description:
            "Fetch and display weather data for your current location and other locations through search functionality. Built with Vite + React and utilizes various APIs: IPWHOIS.IO, geocode.maps.co, Open-Meteo. Developed with a focus on learning and integrating public APIs.",
        date: "November 2023",
        note: "",
        githubLink: "https://github.com/klupka/Weather",
        liveLink: "https://klupka.github.io/Weather/",
        imageURL: weatherImg,
        usage: "Upon arrival, the weather data shown is based on your device's current location. You can switch between Celsius and Fahrenheit using the thermometer button. The location icon displays weather data for your current location or any location you input via the search function.",
    },
];
