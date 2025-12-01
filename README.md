Player - Social Posts Platform

A modern social platform for sharing posts with secure authentication and personalized content management.

✨ Features
📱 Responsive UI - Works on all devices

🔐 Secure Auth - Next Auth with multiple providers

☁️ Cloud Storage - Firebase Firestore database

👤 Personal Profiles - Manage your own posts

🗑️ Post Management - Full control over your content

🛠 Tech Stack
Framework: Next.js 14

Styling: Tailwind CSS

Authentication: Next Auth

Database: Firebase Firestore

Deployment: Vercel (recommended)

🚀 Quick Start
1. Clone & Install
bash
git clone https://github.com/redasalem/player.git  
cd player  
npm install  
2. Environment Setup
Create .env.local:

env
NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=your-secret-key  
GOOGLE_CLIENT_ID=your-google-client-id  
GOOGLE_CLIENT_SECRET=your-google-client-secret  
FIREBASE_PROJECT_ID=your-firebase-project-id  
3. Run Development Server
bash
npm run dev  
Visit: http://localhost:3000

📁 Project Structure
text
player/
├── components/          # React Components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Landing section
│   ├── Posts.jsx       # Posts feed
│   ├── PostDetails.jsx # Single post view
│   ├── Search.jsx      # Search functionality
│   ├── GameImages.jsx  # Media gallery
│   └── Form.jsx        # Post creation form
├── pages/              # App pages
│   ├── api/            # API routes
│   ├── create-post/    # Post creation page
│   ├── profile/        # User profile
│   └── index.js        # Homepage
├── public/             # Static assets
└── styles/             # Global styles
🎮 Usage
For Visitors
Browse public posts on homepage

Sign up via authentication system

For Logged-in Users
Access personal posts via profile picture

Create new posts

Delete your own posts

Manage your profile

🔧 Key Components
Authentication Flow
jsx
// Protected route example  
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  
  if (!session) {
    return <div>Please login to view your profile</div>;
  }
  
  return <UserProfile />;
}
Firebase Setup
javascript
// lib/firebase.js  
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
📸 Component Overview
Header.jsx
Navigation bar with auth status

Profile picture link to personal posts

Posts.jsx
Displays posts from Firestore

Real-time updates

Form.jsx
Post creation form

Image upload support

Profile/index.js
User's personal posts

Post deletion functionality

🌐 API Routes
/api/auth/[...nextauth] - Authentication

/api/posts - Posts management

/api/profile - User data

🔒 Environment Variables
Complete .env.local setup:

env
# Next Auth  
NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=your-generated-secret  

# Google OAuth  
GOOGLE_CLIENT_ID=your-google-oauth-id  
GOOGLE_CLIENT_SECRET=your-google-oauth-secret  

# Firebase  
FIREBASE_PROJECT_ID=your-firebase-project  
FIREBASE_STORAGE_BUCKET=your-firebase-bucket  
FIREBASE_MESSAGING_SENDER_ID=your-sender-id  
FIREBASE_APP_ID=your-app-id  
📦 Deployment
Vercel (Recommended)
Push code to GitHub

Import project in Vercel

Add environment variables

Deploy!

Other Platforms
Netlify

AWS Amplify

Railway

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

Built with ❤️ using Next.js and Firebase
