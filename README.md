E-Commerce Product Listing Interface
This project is a full-stack e-commerce product listing interface built with ReactJS for the frontend and NodeJS (Express) for the backend, designed to meet the provided requirements. The application features a responsive product catalog with filtering, sorting, pagination, cart, and wishlist functionality, styled with TailwindCSS and managed with Redux Toolkit. The backend is implemented as both a standalone Express server and serverless functions for deployment on Vercel.
Features
Frontend

Product Catalog: Displays products in a responsive 3-column grid (1-column on mobile) with:
Product image, title, price, rating, category.
"Add to Cart" button and a wishlist heart icon (toggles on click).


Filters:
Multi-select category checkboxes (e.g., Electronics, Footwear, Clothing).
Price range slider (or number inputs as an alternative).


Sorting: Dropdown for sorting by latest, price low-to-high, or price high-to-low.
Pagination: Previous/Next buttons with page indicators at the bottom.
Cart & Wishlist:
Adds products to cart or wishlist via API calls.
Displays cart and wishlist summaries with item counts and details.


State Management: Uses Redux Toolkit for managing products, cart, and wishlist states.
UI States: Handles loading, error, and empty states for all actions.
Styling: Responsive design using TailwindCSS, ensuring mobile and desktop compatibility.

Backend

Express API (Standalone):
Endpoints for fetching products with filters (category, price range), sorting, and pagination.
In-memory cart and wishlist management (resets on server restart).
Modular structure with controllers and routes.


Serverless API (Vercel):
Adapted Express logic into serverless functions (/api/products, /api/cart, /api/wishlist).
Uses products.json for static data, with in-memory cart and wishlist (resets per function invocation).



Tech Stack

Frontend:
ReactJS (functional components, hooks)
Redux Toolkit (state management)
TailwindCSS (styling)
Axios (API calls)
React-Slider (price range slider, with number input alternative)


Backend:
NodeJS with Express (standalone) or serverless functions (Vercel)
Static products.json for product data


Deployment:
Vercel (combined frontend and serverless backend)
Render (optional for standalone Express backend)


Version Control: Git with clear commit messages

Project Structure
Frontend (ecommerce-frontend)
ecommerce-frontend/
├── api/
│   ├── data/
│   │   └── products.json
│   ├── products.js
│   ├── cart.js
│   └── wishlist.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── Filters.jsx
│   │   ├── Pagination.jsx
│   │   ├── SortDropdown.jsx
│   │   ├── CartSummary.jsx
│   │   └── WishlistSummary.jsx
│   ├── features/
│   │   ├── products/
│   │   │   ├── productsSlice.js
│   │   │   └── productsApi.js
│   │   ├── cart/
│   │   │   └── cartSlice.js
│   │   └── wishlist/
│   │       └── wishlistSlice.js
│   ├── pages/
│   │   └── ProductListing.jsx
│   ├── store/
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── vite.config.js

Backend (ecommerce-backend, Standalone Express)
ecommerce-backend/
├── controllers/
│   └── productController.js
├── data/
│   └── products.json
├── routes/
│   └── productRoutes.js
├── .gitignore
├── package.json
└── server.js

Setup Instructions
Prerequisites

Node.js (v16 or higher)
npm or yarn
Git
Vercel CLI (for local serverless testing)
Optional: MongoDB Atlas (for persistent storage, not implemented by default)

Frontend Setup

Clone the Repository:
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend


Install Dependencies:
npm install


Set Environment Variables:

Create a .env file in the root:REACT_APP_API_URL=http://localhost:5000


For Vercel deployment, set REACT_APP_API_URL to your Vercel project URL (e.g., https://ecommerce-frontend.vercel.app).


Run Locally:
npm run dev


Access at http://localhost:5173.



Backend Setup (Standalone Express)

Clone the Repository:
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend


Install Dependencies:
npm install


Run Locally:
npm start


Access API at http://localhost:5000.
Test endpoints:
GET http://localhost:5000/api/products?page=1&limit=6
POST http://localhost:5000/api/cart with { "productId": 1 }
POST http://localhost:5000/api/wishlist with { "productId": 1 }





Local Testing with Serverless Backend

Install Vercel CLI:
npm install -g vercel


Run in ecommerce-frontend:
cd ecommerce-frontend
vercel dev


Access at http://localhost:3000, with serverless APIs at /api/*.



Deployment
Option 1: Deploy Combined Frontend and Serverless Backend on Vercel

Push to GitHub:
cd ecommerce-frontend
git init
git add .
git commit -m "Complete e-commerce app with frontend and serverless backend"
git remote add origin https://github.com/your-username/ecommerce-frontend.git
git push -u origin main


Deploy on Vercel:

Sign up/log in at vercel.com.
Create a new project and import the ecommerce-frontend repository.
Configure:
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Environment Variables: Set REACT_APP_API_URL to https://your-project-name.vercel.app.


Deploy and access the app at the provided URL.



Option 2: Deploy Standalone Express Backend on Render

Push to GitHub:
cd ecommerce-backend
git init
git add .
git commit -m "E-commerce backend with Express"
git remote add origin https://github.com/your-username/ecommerce-backend.git
git push -u origin main


Deploy on Render:

Sign up/log in at render.com.
Create a new Web Service and connect the ecommerce-backend repository.
Configure:
Environment: Node
Build Command: npm install
Start Command: npm start


Note the deployed URL (e.g., https://ecommerce-backend.onrender.com).
Update the frontend’s .env with REACT_APP_API_URL=https://ecommerce-backend.onrender.com.


Deploy Frontend on Vercel:

Follow the Vercel steps above, ensuring REACT_APP_API_URL points to the Render backend URL.


