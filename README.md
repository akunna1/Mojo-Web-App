# Mojo-Web-App
Full stack development project for Mojo web app, my robot mental health assistant, who provides me with resources depending on how I am feeling

#### Colors
- yellow: #FFC107
- navy blue: #293040

#### Structure
- public
- src/app --> layout.tsx (globals.css imported here), page.tsx (homepage)
- src/app/resources --> page.tsx (resources page)
- src/app/components --> navbar.tsx, footer.tsx, hero.tsx, hero2.tsx
- src/app/style --> globals.css
- src/app/firebase --> config.ts, auth.ts

#### Adding Firebase Authentication
- Install Firebase SDK (using npm install firebase)
- Create Firebase Configuration (config.ts)
- Create Firebase Authentication Helper (auth.ts)
- Modify Navbar (login button changes to logout button once logged in to resources page. Once logged out, user it taken back to homepage)
- Modify Resources page (only logged in users can access it)
