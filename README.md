//  Final README.md for Artistly Assignment (to be added in project root)

/*
#  Artistly.com – React + Next.js Frontend Assignment

##  Description
Artistly is a fictional platform for booking performing artists. This project was built as a test assignment using React, Next.js App Router (v14+), and Tailwind CSS.

##  Features Implemented
- Homepage with Hero section and category cards
- Artist listing page with functional filters (category + location)
- Multi-section Onboarding form with validation (React Hook Form + Yup)
- Optional profile image upload support
- Dashboard page with submissions and 'View' logic
- FilterContext with useContext
- Lazy loading of FilterBlock and Dashboard components
- Fully mobile responsive UI (Tailwind)
- Uses static JSON files as per assignment guidelines
- Basic SEO support using <Head> from 'next/head'
- Basic inline comments and function headers added
- Hosted via Vercel (Optional for demo)

##  Folder Structure
```
/app
  /home/page.jsx
  /artists/page.jsx
  /onboard/page.jsx
  /dashboard/page.jsx
  layout.jsx
  globals.css
/components
  Header.jsx, Hero.jsx, CategoryCard.jsx, ArtistCard.jsx, FilterBlock.jsx, DashboardTable.jsx
/context
  FilterContext.jsx
/data
  artists.json, submissions.json
/public/images
  singer.jpg, dancer.jpg, dj.jpg, speaker.jpg
tailwind.config.js
postcss.config.js
```

##  Tech Stack
- React (functional components)
- Next.js App Router (v14+)
- Tailwind CSS
- React Hook Form + Yup for validation
- Context API (global state)
- React.lazy + Suspense for lazy loading
- `next/link` for navigation (no `react-router-dom`)
- `next/head` for SEO meta tags

##  Installation & Run Locally
```bash
npm install
npm run dev
```
Then open: `http://localhost:3000/home`

##  Pages Overview
- `/home` – Hero + Category Overview (includes <Head> tags)
- `/artists` – Artist cards with filters (uses useContext)
- `/onboard` – Multi-step artist form with validation
- `/dashboard` – Submission list with View popup (console)

##  Form Features
- Validation using React Hook Form + Yup
- Name, Bio, Category, Languages, Fee, Location, Optional Image Upload
- Displays validation messages if fields are invalid
- Submits to local console (mock API)

##  Submission
Email to: gaurav@eventfulindia.com
Subject: [Frontend Dev] Next.js Test Assignment Submission

##  Credentials (Vercel / GitHub)
- GitHub Repo: https://github.com/Ravi-Rathod143/artistly.git
- Vercel Live URL: https://artistly-wine.vercel.app/home
*/
