# Vikrant Lodhi – Portfolio (Vite + React)

## Run it
```bash
npm install
npm run dev        # development server
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Edit your content
Everything (name, experience, projects, skills, links) lives in `src/data.js`.
Styles are in `src/styles.css`. Your resume PDF is `public/Vikrant_Lodhi.pdf` – replace the file to update it.

## Add a project image
1. Put the image in `public/images/` (for example `public/images/sniptyle.png`, about 1600 x 800).
2. In `src/data.js`, set that project's `image: '/images/sniptyle.png'`.

## Deploy
`npm run build`, then upload the `dist` folder to Netlify, Vercel, GitHub Pages or any static host.
The contact form opens the visitor's email app. For direct inbox delivery, connect a form service such as Formspree.
