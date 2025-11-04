# 📞 Contact Management Backend API

A secure **Node.js + Express.js + MongoDB** backend for managing user authentication and contacts.  
It supports **JWT-based authentication**, CRUD operations for contacts, and proper route protection.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register & Login with hashed passwords (bcrypt)
  - JWT-based token authentication
- 👥 **Contact Management**
  - Create, Read, Update, Delete contacts
  - Each contact linked to the logged-in user
- 🧱 **RESTful API structure**
- ⚙️ **Error handling** & organized folder structure
- 🌐 **MongoDB integration** using Mongoose

---

## 📂 Project Structure

backend/
├── src/
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ ├── controllers/
│ │ ├── authController.js # Login & Register logic
│ │ └── contactController.js # (Optional: for cleaner routes)
│ ├── middleware/
│ │ └── authMiddleware.js # JWT verification middleware
│ ├── models/
│ │ ├── User.js # User schema
│ │ └── Contact.js # Contact schema
│ ├── routes/
│ │ ├── authRoutes.js # /api/auth endpoints
│ │ └── contactRoutes.js # /api/contacts endpoints
│ └── server.js # Entry point
├── .env # Environment variables
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

# 1️⃣ Clone the repository

git clone <your_repo_url>
cd backend

# 2️⃣ Install dependencies

npm install

# 3️⃣ Create .env file

# Example:

# --------------------------

# PORT=5000

# MONGO_URI=your_mongodb_connection_string

# JWT_SECRET=your_secret_key

# --------------------------

# 4️⃣ Run the server

npm run dev

# Server will run at:

# 👉 http://localhost:5000

---

## 🔑 API Endpoints

# 👤 Auth Routes

# ------------------------------------------------------

# Method | Endpoint | Description | Protected

# -------|----------------------|------------------------|-----------

# POST | /api/auth/register | Register new user | ❌

# POST | /api/auth/login | Login user & get token | ❌

# 📞 Contact Routes

# ------------------------------------------------------

# Method | Endpoint | Description | Protected

# -------|----------------------|-----------------------------|-----------

# POST | /api/contacts | Create new contact | ✅

# GET | /api/contacts | Get all contacts | ✅

# GET | /api/contacts/:id | Get single contact by ID | ✅

# PUT | /api/contacts/:id | Update contact by ID | ✅

# DELETE | /api/contacts/:id | Delete contact by ID | ✅

# ✅ Protected routes require a valid JWT in header:

# Authorization: Bearer <token>

---

## 🧪 Testing with Postman

1. Register a new user → `/api/auth/register`
2. Login with `/api/auth/login` → copy JWT token
3. For all `/api/contacts` routes → use:
4. Try CRUD operations on contacts

---

## 💾 Example Contact Object

{
"name": "John Doe",
"email": "john@example.com",
"phone": "+91 9876543210",
"message": "Interested in collaboration"
}

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv for environment variables

---

## 🧑‍💻 Author

**Vedant Sharma**  
Backend Developer | CSE @ ADGITM  
GitHub: https://github.com/  
LinkedIn: https://linkedin.com/in/
