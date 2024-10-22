# Test Your Knowledge 🎯

A full-stack interactive quiz application with user authentication, gender-based profiles, and real-time score tracking. Challenge yourself with various quizzes while enjoying a responsive and intuitive user interface.

<div align="center">
  <img src="./src/assets/img/Login.png" alt="Test Your Knowledge App Screenshot">
</div>

## ✨ Features

- **User Authentication**
  - Secure registration and login system
  - JWT-based authentication

- **Quiz System**
  - Interactive quiz interface
  - Real-time score tracking
  - Sound effects for correct/incorrect answers
  - Comprehensive quiz summary

- **User Experience**
  - Responsive design for all devices
  - Intuitive navigation
  - Clean and modern UI
  - Audio feedback during gameplay

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Context API** - State management
- **SCSS** - Styling
- **Axios** - API communication

### Backend
- **Express.js** - Server framework
- **Prisma ORM** - Database management
- **JWT** - Authentication
- **Node.js** - Runtime environment

## 📁 Project Structure

```
├── server/                  # Backend server
│   ├── prisma/             # Database configurations
│   │   ├── migrations/     # Database migrations
│   │   └── schema.prisma   # Prisma schema
│   └── src/
│       ├── middleware/     # Auth middleware
│       └── routes/         # API routes
├── src/
│   ├── assets/            # Static assets
│   │   ├── audio/        # Sound effects
│   │   └── img/          # Images and profiles
│   ├── components/       # React components
│   ├── context/         # React context
│   ├── services/        # API services
│   ├── styles/          # SCSS styles
│   └── utils/           # Utility functions
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/abdelmouu/Test-Your-Knowledge.git
cd Test-Your-Knowledge
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
```

4. Set up environment variables:
Create `.env` file in server directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your-secret-key"
```

5. Run database migrations:
```bash
cd server
npx prisma migrate dev
```

## 🎮 Usage

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend application:
```bash
# From root directory
npm start
```

The application will be available at `http://localhost:3000`

## 💡 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📜 License

FREE

## 👥 Authors

- Abdallah Moumni
- Taha Hassane

## 🙏 Acknowledgments

- Thanks to ALX Family
- Inspired by interactive learning platforms
