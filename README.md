# 🧩 Customer Relationship Management (CRM) Backend

A lightweight backend system for managing client enquiries and counselor interactions, built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.

This API allows employees (counselors) to register/login, view public (unclaimed) enquiries, claim them, and view their own claimed enquiries privately.

---

## 🚀 Features

- Employee **register/login** with JWT authentication
- **Public enquiry form** for prospective clients
- **View public enquiries** (unclaimed leads)
- **Claim enquiry** — assign enquiry to a counselor
- **View claimed enquiries** (private leads)
- **Centralized error handling**
- MongoDB database integration

---

## 🏗️ Tech Stack

```bash
| Layer | Technology |
|--------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT (JSON Web Token) |
| Validation | express-validator |
| Environment Config | dotenv |
```

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
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── enquiryController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Enquiry.js
├── routes/
│   ├── authRoutes.js
│   └── enquiryRoutes.js
├── utils/
│   ├── errorHandler.js
│   └── validator.js
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
Method | Endpoint                | Description                             | Protected
-------|--------------------------|-----------------------------------------|-----------
POST   | /api/enquiry/public      | Submit a new public enquiry             | ❌
GET    | /api/enquiry/public      | Get all unclaimed (public) enquiries    | ✅
POST   | /api/enquiry/claim/:id   | Claim an unclaimed enquiry              | ✅
GET    | /api/enquiry/private     | Get enquiries claimed by logged-in user | ✅
```

## 🧪 Testing with Postman

1. Register a new user → `/api/auth/register`
2. Login with `/api/auth/login` → copy JWT token
3. For all `/api/contacts` routes → use: Authorization: Bearer <your_token>
4. Try CRUD operations on contacts

# 🧪 Example Usage

## Register

- HTTP Type: POST
- API Endpoint: /api/auth/register
- Raw JSON Body:

```bash
{
"name": "John Doe",
"email": "john@example.com",
"password": "123456"
}
```

## Login User

- HTTP Type: POST
- API Endpoint: /api/auth/login
- Raw JSON Body:
```bash
{
"email": "john@example.com",
"password": "123456"
}
```

## Submit Public Enquiry (No Auth Required)

- HTTP Type: POST
- API Endpoint: /api/enquiry/public
- Raw JSON Body:
```bash
{
  "name": "Alice",
  "email": "alice@mail.com",
  "courseInterest": "Full Stack Web Development",
  "message": "I want to know about the course duration."
}
```

## Get All Unclaimed Enquiries (Public Leads)

- HTTP Type: GET
- API Endpoint: /api/enquiry/public
- Headers:
Authorization: Bearer <your_jwt_token>

## Claim an Enquiry (Private it to yourself)

- HTTP Type: POST
- API Endpoint: /api/enquiry/claim/:id
- Headers:
Authorization: Bearer <your_jwt_token>
- Example URL:
```bash
/api/enquiry/claim/67305b5f17c3a2b8942e1e88
```

## Get All Claimed Enquiries (Private Leads)

- HTTP Type: GET
- API Endpoint: /api/enquiry/private
- Headers:
Authorization: Bearer <your_jwt_token>
