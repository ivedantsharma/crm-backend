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
2️⃣ Install dependenciesBashnpm install
3️⃣ Set up environment variablesCreate a .env file in the root directory and add:BashPORT=5000
MONGO_URI=mongodb+srv://your-mongo-uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
4️⃣ Start the serverBashnpm run dev
Server will start at: http://localhost:5000📁 Folder StructureBashsrc/
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
🔑 API Endpoints🔐 AuthenticationMethodEndpointDescriptionPOST/api/auth/registerRegister a new userPOST/api/auth/loginLogin and get tokenExample Login RequestJSONPOST /api/auth/login
{
  "email": "admin@example.com",
  "password": "password123"
}
Example Login ResponseJSON{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
👤 CustomersMethodEndpointDescriptionGET/api/customersGet all customersGET/api/customers/:idGet customer by IDPOST/api/customersAdd new customerPUT/api/customers/:idUpdate customerDELETE/api/customers/:idDelete customerExample Customer ObjectJSON{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "status": "active"
}
🧲 LeadsMethodEndpointDescriptionGET/api/leadsGet all leadsPOST/api/leadsAdd a new leadPUT/api/leads/:idUpdate a leadDELETE/api/leads/:idDelete a leadExample Lead ObjectJSON{
  "leadName": "Jane Smith",
  "source": "Website",
  "interestedCourse": "MERN Stack",
  "status": "new"
}
🎓 Course InterestsMethodEndpointDescriptionGET/api/coursesGet all course interestsPOST/api/coursesAdd new course interestPUT/api/courses/:idUpdate course interestDELETE/api/courses/:idDelete course interestExample Course ObjectJSON{
  "courseName": "Full Stack Development",
  "duration": "6 months",
  "fees": 20000
}
🔧 ScriptsBashnpm start        # Start the server
npm run dev      # Start with nodemon (development)
🧪 TestingUse Postman or Thunder Client to test the API endpoints.Example request for login:JSONPOST /api/auth/login
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
