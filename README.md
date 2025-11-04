# 🧠 Customer Relationship Management (CRM) Backend

This is a **Customer Relationship Management (CRM)** backend built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It provides secure **User Authentication** and **Enquiry Management** (CRUD APIs) for handling customer enquiries.

---

## 🚀 Features

✅ User Registration & Login (JWT-based)  
✅ Enquiry Management (CRUD operations)  
✅ Protected routes using JWT middleware  
✅ MongoDB integration via Mongoose  
✅ Input validation with express-validator  
✅ Environment variables via dotenv  
✅ Easy deployment-ready setup

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
git clone [https://github.com/ivedantsharma/crm-backend.git]
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

### 4️⃣ Start the server

```bash
npm run dev
```

Server will start at: http://localhost:5000

---

## 📁 Folder Structure

```bash
src/
├── config/
│   └── db.js                # Database connection
├── controllers/
│   ├── authController.js    # Handles signup/login
│   └── enquiryController.js  # CRUD for Enquiry
├── middleware/
│   └── authMiddleware.js    # Auth protection (JWT)
├── models/
│   ├── User.js
│   ├── Enquiry.js
├── routes/
│   ├── authRoutes.js
│   ├── enquiryRoutes.js
├── utils/
│   └── errorHandler.js      # Custom error handling
│   └── validator.js         # Validation
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

# 📩 Enquiry Routes

```bash
------------------------------------------------------
Method | Endpoint               | Description                               | Protected
-------|-------------------------|-------------------------------------------|-----------
POST   | /api/enquiry            | Create a new enquiry                      | ✅
GET    | /api/enquiry            | Get all enquiries for logged-in user      | ✅
GET    | /api/enquiry/:id        | Get a single enquiry by ID                | ✅
PUT    | /api/enquiry/:id        | Update an enquiry (if created by user)    | ✅
DELETE | /api/enquiry/:id        | Delete an enquiry (if created by user)    | ✅
```

# ✅ Protected routes require a valid JWT in header:

# Authorization: Bearer <token>

## 🧪 Testing with Postman

1. Register a new user → `/api/auth/register`
2. Login with `/api/auth/login` → copy JWT token
3. For all `/api/contacts` routes → use: Authorization: Bearer <your_token>
4. Try CRUD operations on contacts
