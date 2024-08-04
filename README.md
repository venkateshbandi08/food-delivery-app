# Big Bytes (Food delivery app)

### Deployed link : https://bigbytes-food-delivery.netlify.app/
### Deployed link (admin) : https://bigbytes-admin-panel.netlify.app/

## Project Overview
- This is a complete full-stack project made using the MERN stack technologies.
- An online food delivery application where a user can login/signup into app, select food, order the food, pay using payment gateway service, and track the food status.
- Created an admin app interface, where admin can perform all operation of (CRUD) adding, deleting, and updating the order status of the food


## Technologies and concepts Used :
- **Frontend:** React.js, React-router-dom, axios (for fetching)
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Stripe, REST ful API's
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **web:** HTML (jsx), CSS, JS

## Features
- **CRUD Operations:** Create, read, update, and delete food items by admin
- **Authentication and Authorization:** Usage of JWT for user authentication and session managements
- **Cart functionalities:** User can add food items to the cart and can order the food.
- **Payment gateway service:** Strip's open payment gateway was used to make dummy payments.

## Setup Instructions

### Backend
1. **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```

2. **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the backend directory and add the following:
    ```env
    PORT=4000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

5. **Run the backend server:**
    ```bash
    npm run server (with nodemon) / or node index.js
    ```

### Frontend
1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the frontend server:**
    ```bash
    npm run dev
    ```
    
### Admin's Frontend
1. **Navigate to the frontend directory:**
    ```bash
    cd admin
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the frontend server:**
    ```bash
    npm run dev
    ```

### Usage
1. **Access the application:**
    Open your browser and navigate to `http://localhost:5173`.

2. **Login:**
    If you don't have an account, you need to register first. After registration, login to access the main features of the application.

3. **Add the Food items to cart:**
    Click on the "Food item's" add button to to add or remove the items from the cart

4. **CRUD operation by Admin**
    Admin can create the food item by adding, can delete it, and update the food order status
   

## Project Structure

### Backend
- **server.js:** Entry point of the backend application.
- **routes:** Contains route files for different entities.
- **controllers:** Contains controller files for handling business logic.
- **models:** Contains Mongoose schema definitions.
- **middleware:** Contains middleware functions, including JWT authentication.

### Frontend
- **src/components:** Contains React components.
- **src/pages:** Contains main pages of the applications
- **src/components:** Contains all the react components
- **src/App.js:** Entry point of the frontend application.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request to the main repository.

