# Youssef Werrad | Portfolio

Personal portfolio for Youssef Werrad, a software engineer. The site introduces my approach to building software, presents selected projects and technical skills, and provides ways to get in touch.

**Live site:** [youssefwerrad.github.io](https://youssefwerrad.github.io)

## What’s on the site

- **Home:** introduction and links to projects and contact details.
- **About:** an overview of my work in full-stack development, interface design, AI and machine learning, cloud deployment, and team workflows.
- **Skills:** an interactive display of languages, frameworks, and tools, with four layout options.
- **Projects:** a carousel featuring project descriptions, repository links, and live demos.
- **Contact:** email, GitHub, and LinkedIn links.

The site also supports light and dark themes; the selected theme is saved in local storage.

## Selected projects

- **Best Cars:** dealership listings, ratings, and customer reviews. [Source](https://github.com/youssefwerrad/best-cars) · [Live demo](https://best-cars-1.onrender.com/)
- **Paradise Nursery:** plant shop with a live cart and dynamic filtering. [Source](https://github.com/youssefwerrad/e-plantShopping) · [Live demo](https://youssefwerrad.github.io/e-plantShopping/)
- **Book Reviews:** book discovery and reviews using the Open Library API. [Source](https://github.com/youssefwerrad/bookreviews) · [Live demo](https://bookreviews-rwud.onrender.com/)
- **CarePoint:** clinic management with role-based access, booking, and doctor dashboards. [Source](https://github.com/youssefwerrad/CarePoint) · [Live demo](https://carepoint-yhq2.onrender.com/login)

## Tech stack

- React 18 and JavaScript
- Vite 6
- Tailwind CSS 3
- Lucide React icons
- ESLint and Vitest
- GitHub Pages deployment via `gh-pages`

## Getting started

```bash
git clone https://github.com/youssefwerrad/youssefwerrad.github.io.git
cd youssefwerrad.github.io
npm install
npm run dev
```

Open the local URL printed by Vite (by default, [http://localhost:8080](http://localhost:8080)).

## Available scripts

```bash
npm run dev       # start the local development server
npm run build     # create a production build and GitHub Pages 404 fallback
npm run preview   # preview the production build locally
npm run lint      # run ESLint
npm test          # run Vitest
npm run test:watch # run Vitest in watch mode
npm run deploy    # build and publish dist/ to GitHub Pages
```

Vitest is configured with a `jsdom` environment, but the repository does not currently include test files. Add tests under `src/` before running `npm test`.

## Project structure

```text
youssefwerrad.github.io/
├── public/
│   ├── favicon.svg
│   └── screenshots/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── test/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vitest.config.js
└── README.md
```

## Contact

- Email: [youssefwerrad@gmail.com](mailto:youssefwerrad@gmail.com)
- GitHub: [github.com/youssefwerrad](https://github.com/youssefwerrad)
- LinkedIn: [linkedin.com/in/youssef-werrad-43b1aa401](https://www.linkedin.com/in/youssef-werrad-43b1aa401/)
