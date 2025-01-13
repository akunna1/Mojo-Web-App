# Mojo-Web-App
Full stack development project for Mojo web app, my robot mental health assistant, who provides me with resources depending on how I am feeling

#### Colors
- yellow: #FFC107
- navy blue: #293040
- 
#### Structure
- public
- src/app --> layout.tsx (globals.css, navbar, footer, favicon added here), page.tsx (homepage, other components)
- src/app/resources --> page.tsx (resources page), layout.tsx (metadata and favicon added here)
- src/app/components --> navbar.tsx, footer.tsx, hero.tsx, hero2.tsx, hero3.tsx
- src/app/style --> globals.css
- src/app/firebase --> config.ts

#### Adding Firebase Authentication
- Install Firebase SDK (using npm install firebase)
- Create Firebase Configuration (config.ts)
- update navbar.tsx and resources/page.tsx

### Firestore Stuff
- **addDoc(collection(db, 'users', userId, 'emotions', selectedEmotion, selectedResource), { content: '' })**: Adds a new resource entry with default content when none exists.  
- **collection(db, 'users', userId, 'emotions', selectedEmotion, selectedResource)**: References the collection for the selected emotion and resource.  
- **doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource)**: References the specific document for saving or editing content in the Firestore database.  
- **getDoc(doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource))**: Fetches the existing content for the selected emotion and resource when loading.  
- **onSnapshot(doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource))**: Listens for real-time updates to the selected emotion and resource content.  
- **setDoc(doc(db, 'users', userId, 'emotions', selectedEmotion, selectedResource), { content: updatedContent })**: Updates or saves the user-edited content for the selected combination.  
- **query(collection(db, 'users', userId, 'emotions', selectedEmotion, selectedResource))**: Constructs a query to retrieve all documents matching the selected emotion and resource.  

#### Firebase tools
- **auth**: Initializes Firebase Authentication to manage user sign-ins
- **GoogleAuthProvider**: Configures Google as an authentication provider for sign-in
- **signInWithPopup**: Opens a popup window to authenticate the user with a specified provider (e.g., Google)
- **signOut**: Signs the current user out and clears their session
