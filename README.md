# 🧠 Customer Relationship Management (CRM) Backend

This project is a **Customer Relationship Management (CRM)** backend system built using **Node.js**, **Express.js**, and **MongoDB**.  
It provides APIs for managing **customers**, **leads**, **course interests**, and **user authentication** — allowing organizations to efficiently manage their client database.

---

## 🚀 Features

✅ User authentication using JWT  
✅ CRUD operations for customers, leads, and courses  
✅ Role-based access (admin, staff)  
✅ MongoDB as the database (via Mongoose ODM)  
✅ Proper error handling & response structure  
✅ Scalable folder structure

---

## 🧩 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **JWT** – For authentication
- **bcrypt.js** – For password hashing
- **dotenv** – For environment configuration

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone [https://github.com/yourusername/crm-backend.git](https://github.com/yourusername/crm-backend.git)
cd crm-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a .env file in the root directory and add

```bash
PORT=5000
MONGO_URI=mongodb+srv://your-mongo-uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4️⃣ Start the serverBashnpm run dev

Server will start at: http://localhost:5000

---

## 📁 Folder StructureBashsrc/

```bash
├── config/
│   └── db.js                # Database connection
├── controllers/
│   ├── authController.js    # Handles signup/login
│   ├── customerController.js# CRUD for customers
│   ├── leadController.js    # CRUD for leads
│   └── courseController.js  # CRUD for course interests
├── middleware/
│   └── authMiddleware.js    # Auth protection (JWT)
├── models/
│   ├── User.js
│   ├── Customer.js
│   ├── Lead.js
│   └── CourseInterest.js
├── routes/
│   ├── authRoutes.js
│   ├── customerRoutes.js
│   ├── leadRoutes.js
│   └── courseRoutes.js
├── utils/
│   └── errorHandler.js      # Custom error handling
├── server.js                # Entry point
└── .env                     # Environment variables
```

---

## 🔑 API Endpoints

# 👤 Auth Routes

```bash
------------------------------------------------------
Method | Endpoint            | Description            | Protected
-------|----------------------|------------------------|-----------
POST   | /api/auth/register   | Register new user      | ❌
POST   | /api/auth/login      | Login user & get token | ❌
```

# 📞 Contact Routes

```bash
------------------------------------------------------
Method | Endpoint             | Description                | Protected
-------|----------------------|-----------------------------|-----------
POST   | /api/contacts        | Create new contact          | ✅
GET    | /api/contacts        | Get all contacts            | ✅
GET    | /api/contacts/:id    | Get single contact by ID    | ✅
PUT    | /api/contacts/:id    | Update contact by ID        | ✅
DELETE | /api/contacts/:id    | Delete contact by ID        | ✅
```

# ✅ Protected routes require a valid JWT in header:

# Authorization: Bearer <token>

## 🧪 Testing with Postman

1. Register a new user → `/api/auth/register`
2. Login with `/api/auth/login` → copy JWT token
3. For all `/api/contacts` routes → use: Authorization: Bearer <your_token>
4. Try CRUD operations on contacts
