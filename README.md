# WCAG Palette Generator
Built as an interface for the [WCAG Color Service](https://www.npmjs.com/package/wcag-color-service).

A web application that generates accessible color palettes based on WCAG contrast guidelines.  
Built with a focus on clean, maintainable code and usability for designers and developers who want to ensure their color combinations meet accessibility standards.

## Live Demo

[Visit the app here](https://wcag-palatte-generator.onrender.com)

Note: The app is deployed using the free version of Render, which means it takes a couple of seconds before it starts running. 


## Features

- Generate color palettes that pass **WCAG AA/AAA contrast ratios**
- Supports **large text and normal text** contrast checks
- Flash messages for form validation and user feedback
- Save and delete generated palettes
- Clean and responsive UI built for accessibility

## Tech Stack

- **Node.js** + **Express** – Server and routing  
- **MVC Architecture** – Separation of concerns between models, views, and controllers  
- **Object-Oriented JavaScript** – Controllers and utilities implemented as reusable classes  
- **EJS** – Templating engine for dynamic views  
- **CSS** – For styling  
- **MongoDB + Mongoose** – For saving palettes  

## Testing

The project includes manual tests to verify palette generation and contrast validation.

Example tests include:
- Verifying that generated palettes meet WCAG AA/AAA standards
- Checking that invalid hex codes (e.g. #123456ff) are cleaned before validation
- Ensuring error messages appear for invalid or missing input

Additional test documentation can be found here:
- [Requirement/Test specification](./docs/kravspecifikation.md)
- Test Report

## License

This project is licensed under the MIT License — see the [LICENSE](/LICENSE)
 file for details.

 ## Author

 Smilla Sollén
 WCAG Palette Generator – Clean Code school project for the course 1DV610 at Linnéaus University 2025