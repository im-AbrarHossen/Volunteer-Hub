# Volunteer Hub

## Purpose
This project is designed to showcase posts about volunteering opportunities. Users can search for specific posts by their title and browse through available opportunities.

## Live URL
https://job-portal-c1a3a.firebaseapp.com/

## Key Features
- Dynamic Data Fetching: Fetches volunteer posts dynamically from the backend.
- Search Functionality: Allows users to search posts by their title.
- Responsive Design: Adapts seamlessly across devices.
- Toast Notifications: Provides user feedback when no search results are found.
- Reusable Components: Modular structure with reusable components like Navbar, Footer, and VolunteerNeedCard.
- Loading and Error Handling: Gracefully handles loading states and search errors.

## NPM Packages Used
- react-icons: For using the search icon (FiSearch).
- react-toastify: For toast notifications.
- react-router-dom: For routing.

## Technologies Used
This project is built using the following technologies:

### Frontend
* React JS: A JavaScript library for building user interfaces.
* React Router: For handling client-side routing and navigation.
* Vite: A fast build tool and development server for modern web projects.
* Tailwind CSS: A utility-first CSS framework for rapid UI development.
* DaisyUI: A component library built on top of Tailwind CSS for pre-designed UI components.
### Backend & Infrastructure
* Firebase: A backend-as-a-service platform for authentication, database (Firestore), and hosting.
* Firebase Authentication: For user authentication (e.g., email/password, Google login).
* Firestore: A NoSQL database for storing and syncing data.
* Firebase Hosting: For deploying and hosting the website.
### Development Tools
* npm / yarn: Package managers for managing dependencies.
* Git: For version control and collaboration.

## Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** (package manager)
- **Firebase CLI** (if using Firebase services)

## Guideline For run the project locally:
### 1. Clone the Repository
Clone the repository to your local machine:
* git clone https://github.com/your-username/your-repo-name.git
* cd your-repo-name
### 2. Install Dependencies (npm install)
* "firebase": "^11.0.2",
* "lottie-react": "^2.4.0",
* "react": "^18.3.1",
* "react-awesome-reveal": "^4.2.14",
* "react-dom": "^18.3.1",
* "react-icons": "^5.4.0",
* "react-router-dom": "^7.0.2",
* "react-simple-typewriter": "^5.0.1",
* "react-toastify": "^10.0.6",
* "react-tooltip": "^5.28.0",
* "sweetalert2": "^11.14.5",
* "swiper": "^11.1.15",
* "daisyui": "^4.12.14",
* "tailwindcss": "^3.4.15",
* "vite": "^6.0.1"
### 3. Set Up Firebase Configuration
* Create a Firebase project in the Firebase Console.
* Add your Firebase configuration to the project. This is usually in a file like firebase.js or firebaseConfig.js.
### 4. Set Up Environment Variables
* Create a .env file in the root directory and add your environment variables.
### 5. Run the Development Server
* Start the Vite development server: (npm run dev)
