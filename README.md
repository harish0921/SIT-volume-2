# SIT Shanthi IT Solution - React EdTech Application

A modern, dynamic, and mobile-responsive React application for an EdTech platform.

## Features

- **React Functional Components**: Built using modern React with functional components and hooks
- **Dynamic Content**: All content is stored in JavaScript objects/arrays and rendered using `.map()` and props
- **Responsive Design**: Fully mobile-responsive using Bootstrap 5 grid system
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Contact Form**: Interactive contact form with validation and submission handling
- **React Router**: Navigation between pages using React Router DOM

## Project Structure

```
sit-shanthi-it-solution/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── content.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Components

- **Navbar**: Responsive navigation bar with mobile menu
- **Home**: Hero section, features, and statistics
- **About**: Mission, vision, and core values
- **Services**: Grid of service cards with features
- **Contact**: Contact form and information
- **Footer**: Footer with links and social media

## Technologies Used

- React 18.2.0
- React Router DOM 6.8.0
- Bootstrap 5.3.0
- Bootstrap Icons

## Customization

All content can be easily customized by editing the data objects in `src/data/content.js`. The components will automatically render the updated content.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

This project is created for educational purposes.
