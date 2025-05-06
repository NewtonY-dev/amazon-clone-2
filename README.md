# Amazon Clone

## Description

This project is a clone of the Amazon e-commerce platform, built using React and Firebase. It includes features for user authentication, product display, shopping cart management, and payment processing.

## Live Demo

You can view the live deployed version of this project here:
[https://amazon-clone-newtony.netlify.app/](https://amazon-clone-newtony.netlify.app/)

## Features

* User authentication (Sign In and Sign Up)
* Product listing and display with detailed views
* Categorization of products and category-specific result pages
* Shopping cart functionality (add items, remove items, adjust quantity)
* Order history for authenticated users
* Payment processing using Stripe integrated with Firebase Functions
* Image carousel on the landing page
* Responsive design
* Global state management using React Context API
* Protected routes for user-specific pages

## Technology Stack

* **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: A modern frontend build tool.
* **[Firebase](https://firebase.google.com/)**: A platform for building web and mobile applications.
    * `firebase/auth`: For user authentication.
    * `firebase/firestore`: For database (storing orders).
    * **[Firebase Functions](https://firebase.google.com/docs/functions)**: For deploying backend code (payment processing).
        * `firebase-admin`: For backend services in Firebase Functions.
* **[Stripe](https://stripe.com/)**: A platform for online payment processing.
    * `@stripe/react-stripe-js` and `@stripe/stripe-js`: For integrating Stripe with React. ([https://stripe.com/docs/stripe-js](https://stripe.com/docs/stripe-js))
* **[Axios](https://axios-http.com/)**: A promise-based HTTP client for the browser and node.js.
* **[React Router DOM](https://reactrouter.com/web/guides/quick-start)**: For handling routing within the React application.
* **[@mui/material](https://mui.com/)**: Material UI for React components (specifically `Rating`).
* **[react-responsive-carousel](http://react-responsive-carousel.js.org/)**: For implementing a carousel in the UI.
* **[react-spinners](https://www.davidhu.io/react-spinners/)**: For loading spinners.
* **[Numeral](http://numeraljs.com/)**: For formatting numbers (currency).

## Directory Structure

```
└── newtony-dev-amazon-clone-2/
├── README.md                 // This file
├── firebase.json             // Firebase hosting and functions configuration
├── index.html                // Main HTML entry point for Vite
├── package.json              // Frontend dependencies and scripts
├── .firebaserc               // Firebase project association
├── functions/                // Firebase Cloud Functions
│   ├── index.js              // Main file for cloud functions (payment endpoint)
│   ├── package-lock.json
│   ├── package.json          // Dependencies for Firebase Functions
│   └── .gitignore
├── public/                   // Static assets (e.g., favicon.ico)
└── src/                      // Frontend source code
├── App.css               // Styles for the root App component
├── App.jsx               // Main React application component
├── index.css             // Global styles
├── main.jsx              // Entry point for the React app, renders App
├── Router.jsx            // Defines application routes using React Router
├── components/           // Reusable React components
│   ├── API/
│   │   ├── axios.js      // Axios instance configuration
│   │   └── endpoint.js   // Base URL for product API
│   ├── Carousel/
│   │   ├── Carousel.module.css
│   │   ├── CarouselEffect.jsx // Carousel implementation
│   │   └── img/
│   │       └── data.js   // Image data for carousel
│   ├── Category/
│   │   ├── Category.jsx
│   │   ├── category.module.css
│   │   ├── CategoryCard.jsx // Component for a single category card
│   │   └── categoryFullInfo.js // Data for categories
│   ├── CurrencyFormat/
│   │   └── CurrencyFormat.jsx // Component for displaying formatted currency
│   ├── DataProvider/
│   │   └── DataProvider.jsx // Context API for global state management
│   ├── Header/
│   │   ├── Header.jsx    // Main header component
│   │   ├── Header.module.css
│   │   └── LowerHeader.jsx // Lower part of the header
│   ├── LayOut/
│   │   └── LayOut.jsx    // Main layout component (includes Header)
│   ├── Loader/
│   │   └── Loader.jsx    // Loading spinner component
│   ├── Product/
│   │   ├── Product.jsx   // Fetches and displays list of products
│   │   ├── Product.module.css
│   │   └── ProductCard.jsx // Component for a single product card
│   └── ProtectedRoute/
│       └── ProtectedRoute.jsx // Component for route protection
├── Pages/                // Page-level components
│   ├── Auth/
│   │   ├── Auth.jsx      // Authentication page (Sign In/Sign Up)
│   │   └── SignUp.module.css
│   ├── Cart/
│   │   ├── Cart.jsx      // Shopping cart page
│   │   └── Cart.module.css
│   ├── Landing/
│   │   └── Landing.jsx   // Landing page
│   ├── Orders/
│   │   ├── Orders.jsx    // Order history page
│   │   └── Orders.module.css
│   ├── Payment/
│   │   ├── Payment.jsx   // Payment page
│   │   └── Payment.module.css
│   ├── ProductDetail/
│   │   └── ProductDetail.jsx // Product detail page
│   └── Results/
│       ├── Results.jsx   // Search/Category results page
│       └── Results.module.css
└── Utility/              // Utility functions, Firebase config, and reducer
├── action.type.js    // Action types for reducer
├── firebase.js       // Firebase configuration and initialization
└── reducer.js        // Reducer function for Context API
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/NewtonY-dev/amazon-clone-2.git
    cd newtony-dev-amazon-clone-2
    ```

2.  **Install dependencies for the React app (frontend):**
    ```bash
    npm install
    ```

3.  **Install dependencies for Firebase Functions (backend):**
    ```bash
    cd functions
    npm install
    cd ..
    ```

4.  **Set up Firebase:**
    * Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
    * Add a Web app to your project and copy the Firebase config object.
    * Create a `.env` file in the `src/` directory (root of the frontend application, same level as `package.json`) and add your Firebase configuration variables. The `src/Utility/firebase.js` file expects these prefixed with `VITE_`:
        ```env
        VITE_API_KEY=your_firebase_api_key
        VITE_AUTH_DOMAIN=your_firebase_auth_domain
        VITE_PROJECT_ID=your_firebase_project_id
        VITE_STORAGE_BUCKET=your_firebase_storage_bucket
        VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
        VITE_APP_ID=your_firebase_app_id
        ```
    * In your Firebase project, enable Firestore (Native mode) and Authentication (Email/Password sign-in method).
    * Install the Firebase CLI if you haven't already: `npm install -g firebase-tools`
    * Log in to Firebase: `firebase login`
    * Associate your local project with your Firebase project (run from the `newtony-dev-amazon-clone-2` directory): `firebase use --add` and select your project.

5.  **Set up Stripe:**
    * Create a Stripe account on the [Stripe website](https://stripe.com/).
    * Find your Publishable Key in the Stripe Dashboard. You will need to add this directly into `src/Router.jsx` where `loadStripe()` is called.
    * Find your Secret Key in the Stripe Dashboard.
    * Set up your Stripe secret key as an environment variable for Firebase Functions. You can do this by creating a `.env` file inside the `functions` directory:
        ```env
        # functions/.env
        STRIPE_KEY=your_stripe_secret_key
        ```
        Alternatively, and more securely for deployment, set it via the Firebase CLI:
        ```bash
        firebase functions:config:set stripe.key="your_stripe_secret_key"
        ```
        If you use `firebase functions:config:set`, your `functions/index.js` would typically access it via `functions.config().stripe.key`. The current code uses `process.env.STRIPE_KEY`, which works with a local `.env` file in the `functions` directory when using `dotenv`.

## Usage

1.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.

2.  **To test Firebase Functions locally (including payment):**
    * Ensure you have `dotenv` configured in `functions/index.js` and a `functions/.env` file with `STRIPE_KEY`.
    * Start the Firebase emulators (from the `newtony-dev-amazon-clone-2` directory):
        ```bash
        firebase emulators:start --only functions
        ```
    * The payment API endpoint will be available at a local URL (e.g., `http://127.0.0.1:5001/your-project-id/us-central1/api`). Update `src/components/API/axios.js` to point to this local URL if needed for testing.

3.  **Deploy Firebase Functions (for payment processing to go live):**
    ```bash
    firebase deploy --only functions
    ```
    After deployment, update the `baseURL` in `src/components/API/axios.js` to your live Firebase Function URL if it's not already set to the production URL.

## API Reference

### Payment Creation

Handles the creation of a payment intent using Stripe for processing payments. This is typically called by the frontend when a user proceeds to checkout.

* **URL:** `YOUR_FIREBASE_FUNCTIONS_ENDPOINT/api/payment/create`
    * Replace `YOUR_FIREBASE_FUNCTIONS_ENDPOINT` with your actual deployed Firebase Function URL (e.g., `https://us-central1-your-project-id.cloudfunctions.net`) or the local emulator URL for testing. The `axiosInstance` in `src/components/API/axios.js` is configured to use `https://amazon-clone-api-wox6.onrender.com` or a local emulator URL.
* **Method:** `POST`
* **Query Parameters:**
    * `total` (integer, required): The total amount for the payment in the smallest currency unit (e.g., cents for USD).
* **Request Body:**
    * The client-side Stripe Elements handle the secure collection of card details; no sensitive card data is sent directly in this request from the client to this endpoint.
* **Response:**
    * **Success (Status Code 201):**
        ```json
        {
          "clientSecret": "pi_xxxxxxxxxxxxxxxxx_secret_xxxxxxxxxxxx"
        }
        ```
        The `clientSecret` is used by the frontend Stripe SDK to confirm the payment.
    * **Error (Status Code 401 - Unauthorized/Bad Request):**
        ```json
        {
          "message": "total must be greater than 0"
        }
        ```
        This error is returned if the `total` amount is not valid. Other errors might occur if Stripe API interaction fails.

## License

MIT License

Copyright (c) 2025 Newton Yetsedaw

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
