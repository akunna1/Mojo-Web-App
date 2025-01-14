# Mojo-Web-App
Full stack development project for Mojo web app, my robot mental health assistant, who provides me with resources depending on how I am feeling

#### Colors
- yellow: #FFC107
- navy blue: #293040
  
#### Structure
- public
- src/app --> layout.tsx (globals.css, navbar, footer, favicon added here), page.tsx (homepage, metadata, other components)
- src/app/resources --> page.tsx (resources page, 1 component imported here i.e hero4.tsx, contains codes for firebase auth), layout.tsx (metadata and favicon added here)
- src/app/components --> navbar.tsx (contains code for firebase auth), footer.tsx, hero.tsx, hero2.tsx, hero3.tsx, hero4.tsx (contains codes for firestore)
- src/app/style --> globals.css
- src/app/firebase --> config.ts

#### Adding Firebase Authentication
- Install Firebase SDK (using npm install firebase)
- Create Firebase Configuration (config.ts)
- update navbar.tsx and resources/page.tsx

### Firestore Stuff
- **addDoc(collection(db, 'users', userId, 'emotions', selectedEmotion, selectedResource), { content: '' })**: Adds a new resource entry with default content when none exists.  
- **doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource)**: References the specific document for saving or editing content in the Firestore database  
- **getDoc(doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource))**: Fetches the existing content for the selected emotion and resource when loading  
- **setDoc(doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource), { content: updatedContent })**: Updates or saves the user-edited content for the selected combination

#### Firebase tools
- **auth**: Initializes Firebase Authentication to manage user sign-ins
- **GoogleAuthProvider**: Configures Google as an authentication provider for sign-in
- **signInWithPopup**: Opens a popup window to authenticate the user with a specified provider (e.g., Google)
- **signOut**: Signs the current user out and clears their session

#### Git commands to add your project to GitHub
- cd path/to/my/project
- git init
- git remote add origin https://github.com/username/mojo-app.git
- git add .
- git commit -m "Initial commit"
- git branch -M main
- git push -u origin main
