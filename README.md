# Amazon Clone - React App

A fully functional **Amazon clone** built with **React**, **Firebase**, and **Docker**, featuring user authentication, product management, and a responsive UI. The app mimics core e-commerce features and is containerized for easy deployment.

## Features

- **User Authentication**:  
  Users can sign up and log in securely using **Firebase Authentication** with email/password login.
- **Product Management (CRUD)**:  
  Admin users can create, read, update, and delete products. Product information is stored in **Firebase Firestore**.

- **Responsive Design**:  
  The app is fully responsive and provides a seamless shopping experience on both desktop and mobile devices.

- **State Management**:  
  Global state is managed using **React Context API** and **Redux**, ensuring a smooth flow of data between components.

- **Routing**:  
  **React Router** is used to handle client-side routing, allowing users to navigate between different pages (Home, Product Details, Cart, etc.).

- **Add to Cart & Checkout**:  
  Users can add products to their cart, view the cart, and proceed to checkout.

- **Containerized Deployment**:  
  The application is packaged using **Docker**, making it easy to deploy on any cloud platform or run locally with consistent environments.

## Tech Stack

- **Frontend**:

  - **React**: A popular JavaScript library for building user interfaces.
  - **React Router**: For handling client-side routing and navigation between pages.
  - **Redux & React Context API**: For global state management across the application.
  - **Axios**: For making HTTP requests to interact with Firebase services.

- **Backend**:
  - **Firebase Firestore**: A NoSQL database for storing product data.
  - **Firebase Authentication**: Provides secure user authentication using email/password.
- **Deployment**:

  - **Docker**: Used to containerize the app for easier deployment and scalability across various environments.

- **Other Libraries**:
  - **Firebase SDK**: For interacting with Firebase services (Firestore, Authentication).
  - **Styled Components**: For styling the application components.

## Application Flow

1. **Authentication**:  
   Users can sign up or log in using their email and password. Firebase Authentication manages the user session.

2. **Product Management**:  
   Admin users can add, update, and remove products, which are stored in Firebase Firestore.

3. **User Interaction**:  
   Users can browse products, add them to their cart, and proceed to checkout.

4. **Responsive UI**:  
   The app is designed to be fully responsive, ensuring a great user experience on both mobile and desktop devices.

![Screenshot 2024-11-18 at 9 25 15 PM](https://github.com/user-attachments/assets/02d1cc7b-a2ae-49e7-a3b4-821d33f42480)
![Screenshot 2024-11-18 at 9 26 18 PM](https://github.com/user-attachments/assets/f06a0f98-3ead-44b6-84fe-e2d6d4718103)
![Screenshot 2024-11-18 at 9 25 42 PM](https://github.com/user-attachments/assets/2d6aebe5-68cf-4152-8303-58c5c8263cb8)

## Dockerized Deployment

The application is fully containerized using **Docker**. This ensures consistency in the development environment and simplifies deployment to cloud platforms.

- Build and run the app inside a container for easy scaling and deployment.
