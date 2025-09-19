# Simpli FI Profile Craft — Beginner Version

## Overview
This is a **ReactJS single-page application** that fetches user data from a public API and displays it as profile cards with unique avatars generated using **DiceBear Avatars API**. This beginner version focuses on core React concepts.

---

## Features
- Fetch user data from `https://jsonplaceholder.typicode.com/users`.
- Display profile cards with:
  - Name
  - Username
  - Email
  - Phone
  - Company name
- Show a **loading spinner** while data is being fetched.
- Unique avatar for each user based on their username.

---

## Technologies Used
- **ReactJS** (Functional components, Hooks: `useState`, `useEffect`)  
- **CSS / Flexbox / Media Queries**  
- **DiceBear Avatars API**  
- **JSONPlaceholder API**  

---

## Project Structure

```bash
frontend/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/\
│ │  └──UserCard
│ │     ├──index.js
│ │     └──index.css
│ ├── App.js 
│ ├── App.css
│ ├── index.js
│ └──index.css
│ 
├── package.json
└── README.md

```

## Installation & Running the Project

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/simpli-fi-profile-craft.git
cd simpli-fi-profile-craft
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the project:**
```bash
npm start
```

## Deployed Application

The live version of this project is deployed on Vercel. You can access it here:  

[https://your-vercel-deployment-url.vercel.app]
