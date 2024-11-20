# Task-Management-API-








Task Management System -


This backend application is a RESTful API built with Node.js, Express.js, and MongoDB to manage tasks. It includes features like task creation, updating, deletion, and marking tasks as complete.

Features


Create, retrieve, update, delete tasks.
Mark tasks as complete.
Task properties include:



Title, Description, Due Date, Status (pending, in_progress, completed).
JWT-based authentication (optional for this version).
Input validation and error handling.
Timestamps (created_at and updated_at) for task tracking.
Prerequisites





Before running the application, ensure the following are installed on your machine:

Node.js (version 16 or above)
npm (comes with Node.js) or yarn
MongoDB (running locally or a connection string for a hosted database)
Getting Started










1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-folder>








2. Install Dependencies




bash
Copy code
npm install
3. Setup Environment Variables
Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
PORT: Port where the backend server will run.




MONGO_URI: Connection string for your MongoDB database.
JWT_SECRET: A secret key for JWT token generation and validation.
4. Start MongoDB



Ensure MongoDB is running locally:

bash
Copy code
mongod
Or, use a cloud-hosted MongoDB instance (e.g., MongoDB Atlas) and replace MONGO_URI in the .env file with your connection string.

5. Run the Application


bash
Copy code
npm start
The server will run on http://localhost:5000 by default unless a different PORT is specified in .env.
API Endpoints



Base URL
Default: http://localhost:5000
Endpoints




Method	Endpoint	Description




GET	/tasks	Retrieve all tasks
GET	/tasks/:id	Retrieve a specific task by ID
POST	/tasks	Create a new task
PUT	/tasks/:id	Update an existing task
DELETE	/tasks/:id	Delete a task
PATCH	/tasks/:id/complete	Mark a task as complete
