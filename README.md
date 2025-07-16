# 🤖 Mojo Web App (Upgraded Version)

##  About

**Mojo** is a full-stack mental wellness assistant built to offer curated emotional support. Depending on how I’m feeling — whether anxious, overwhelmed, joyful, or anything in between — Mojo responds with thoughtful, customizable resources. This version introduces **user authentication** and **Firestore integration**, allowing each user to securely save and manage their emotional wellness resources.

🌐 **Live App:** [helpermojo.com](https://www.helpermojo.com/)

> #### 🚧 7 branches of codes available!

---

## 🎨 App Colors

* 💛 Yellow: `#FFC107`
* 💙 Navy Blue: `#293040`

---

## 🗂️ Project Structure

```
public/
src/
  └── app/
      ├── layout.tsx         # Global layout w/ navbar, footer, favicon
      ├── page.tsx           # Homepage w/ main metadata and components
      └── resources/
          ├── layout.tsx     # Resources page layout + favicon
          └── page.tsx       # Resources page with Firebase Auth
      ├── components/
          ├── navbar.tsx     # Navigation bar with auth logic
          ├── footer.tsx
          ├── hero.tsx
          ├── hero2.tsx
          ├── hero3.tsx
          └── hero4.tsx      # Contains Firestore integration
      ├── firebase/
          └── config.ts      # Firebase SDK configuration
      └── style/
          └── globals.css    # Global styles
```

---

## 🔐 Firebase Authentication

Authentication is integrated using **Google Sign-In**:

* 🔌 Install Firebase SDK:

  ```bash
  npm install firebase
  ```

* 🧩 Configuration:

  * Set up `config.ts` in `src/app/firebase`
  * Enable Google Sign-In via Firebase Console

* 🔑 Key Firebase Auth Tools:

  * `auth` – initializes Firebase Authentication
  * `GoogleAuthProvider` – enables Google login
  * `signInWithPopup()` – signs user in via popup
  * `signOut()` – logs the user out

Used in:

* `navbar.tsx`
* `resources/page.tsx`

---

## 🔥 Firestore Database

Mojo now supports saving user-specific wellness content:

* ➕ `addDoc(collection(...))`: Adds a default resource when none exists
* 📍 `doc(...)`: Points to the exact document path in Firestore
* 🔍 `getDoc(...)`: Retrieves saved content for a given emotion and resource
* 💾 `setDoc(...)`: Saves or updates user-edited resource content

Used in:

* `hero4.tsx`

---

## 🧪 Git Commands to Push to GitHub

```bash
cd path/to/my/project
git init
git remote add origin https://github.com/username/mojo-app.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

## 🛠️ Tech Stack

* **Next.js** – framework for building fast, scalable React apps
* **TypeScript** – for better code safety and maintainability
* **Tailwind CSS** – utility-first styling for rapid UI development
* **Firebase Auth** – secure Google sign-in/out
* **Firestore DB** – real-time database for storing user-generated content

---

## 🧠 Topics

`firebase` • `typescript` • `nextjs` • `web-app` • `full-stack` • `firebase-auth` • `tailwindcss` • `firestore-database`

