# Mojo-Web-App
Full stack development project for Mojo web app, my robot mental health assistant, who provides me with resources depending on how I am feeling

#### Colors
- yellow: #FFC107
- navy blue: #293040

#### Structure
- public
- src/app --> layout.tsx (globals.css, navbar, footer, favicon added here), page.tsx (homepage)
- src/app/resources --> page.tsx (resources page)
- src/app/components --> navbar.tsx, footer.tsx, hero.tsx, hero2.tsx, hero3.tsx
- src/app/style --> globals.css
- src/app/firebase --> config.ts

#### Adding Firebase Authentication
- Install Firebase SDK (using npm install firebase)
- Create Firebase Configuration (config.ts)


#### Firebase tools
- **auth**: Initializes Firebase Authentication to manage user sign-ins
- **GoogleAuthProvider**: Configures Google as an authentication provider for sign-in
- **signInWithPopup**: Opens a popup window to authenticate the user with a specified provider (e.g., Google)
