
# 🛒 E-Commerce Product Listing Interface

A **full-stack** e-commerce product listing application built using **ReactJS** for the frontend and **NodeJS (Express)** for the backend.  
The project features a responsive product catalog with filtering, sorting, pagination, cart, and wishlist functionalities — styled beautifully with **TailwindCSS** and managed via **Redux Toolkit**.

The backend is available as both a **standalone Express server** and **serverless functions** (for Vercel deployment).

---

## ✨ Features

### Frontend
- **Product Catalog:**  
  - Displays product image, title, price, rating, and category.
  - "Add to Cart" button and a wishlist heart icon (toggle).
- **Filters:**  
  - Multi-select category checkboxes (e.g., Electronics, Footwear, Clothing).
  - Price range slider or number input alternatives.
- **Sorting:**  
  - Dropdown to sort by Latest, Price Low-to-High, Price High-to-Low.
- **Pagination:**  
  - Previous/Next buttons with page indicators.
- **Cart & Wishlist Management:**  
  - Add/remove products via API calls.
  - Cart and wishlist summaries with item counts and details.
- **State Management:**  
  - Powered by **Redux Toolkit**.
- **UI States:**  
  - Loading, Error, and Empty state handling.
- **Responsive Design:**  
  - Mobile-friendly 1-column view and desktop 3-column grid.
- **Styling:**  
  - TailwindCSS for modern and responsive UI.

### Backend
- **Standalone Express API:**
  - Endpoints for products with filtering, sorting, and pagination.
  - In-memory Cart and Wishlist (reset on server restart).
- **Serverless Functions (Vercel Ready):**
  - Adapted Express logic into Vercel’s serverless architecture.
  - Static product data (via `products.json`).

---

## 🛠 Tech Stack

| Frontend      | Backend           | Deployment     |
| :------------ | :----------------- | :------------- |
| ReactJS (Hooks) | NodeJS + Express   | Vercel (Frontend + Serverless API) |
| Redux Toolkit | Static products.json | Render (Optional for Standalone Express) |
| TailwindCSS   |                   |                |
| Axios         |                   |                |
| React-Slider  |                   |                |

---

## 📁 Project Structure

### Frontend (`ecommerce-frontend`)
```
ecommerce-frontend/
├── api/
│   ├── data/products.json
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
│   │   ├── cart/
│   │   └── wishlist/
│   ├── pages/
│   │   └── ProductListing.jsx
│   ├── store/
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json
├── vite.config.js
└── package.json
```

### Backend (`ecommerce-backend`)
```
ecommerce-backend/
├── controllers/
│   └── productController.js
├── data/
│   └── products.json
├── routes/
│   └── productRoutes.js
├── server.js
└── package.json
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- Vercel CLI (for local serverless testing, optional)

---

## 🌐 Frontend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend

# Install dependencies
npm install

# Create a .env file
REACT_APP_API_URL=http://localhost:5000

# Start development server
npm run dev
```

- Visit: [http://localhost:5173](http://localhost:5173)

---

## 🖥 Backend Setup (Standalone Express)

```bash
# Clone the repository
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend

# Install dependencies
npm install

# Start the server
npm start
```

- API will run on: [http://localhost:5000](http://localhost:5000)

**Test Endpoints:**
- `GET /api/products?page=1&limit=6`
- `POST /api/cart` → `{ "productId": 1 }`
- `POST /api/wishlist` → `{ "productId": 1 }`

---

## 🧪 Local Testing with Serverless Backend (Optional)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Start Vercel development mode
cd ecommerce-frontend
vercel dev
```

- Access app at: [http://localhost:3000](http://localhost:3000)
- Serverless APIs accessible via `/api/*`

---

## 📦 Deployment

### Option 1: Vercel (Combined Frontend + Serverless Backend)
1. Push your frontend to GitHub:

```bash
cd ecommerce-frontend
git init
git add .
git commit -m "E-commerce app complete"
git remote add origin https://github.com/your-username/ecommerce-frontend.git
git push -u origin main
```

2. Deploy on Vercel:
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: 
  ```
  REACT_APP_API_URL=https://your-vercel-app-url.vercel.app
  ```

✅ Done! Live URL provided after deploy.

---

### Option 2: Backend on Render + Frontend on Vercel
1. Push backend to GitHub:

```bash
cd ecommerce-backend
git init
git add .
git commit -m "Standalone Express Backend"
git remote add origin https://github.com/your-username/ecommerce-backend.git
git push -u origin main
```

2. Deploy backend on Render:
- Environment: **Node**
- Build Command: `npm install`
- Start Command: `npm start`
- Save your Render deployed URL (e.g., `https://ecommerce-backend.onrender.com`)

3. Update Frontend `.env`:
```
REACT_APP_API_URL=https://ecommerce-backend.onrender.com
```

4. Push frontend to Vercel as described earlier.

---

## 📌 Notes
- 🛒 Cart & Wishlist are **in-memory** (reset on server restart or function cold start).
- 🛠 Future enhancement: Add database support (MongoDB Atlas, etc.).
- ⚡ Optimized for both Desktop and Mobile.

---

## 📸 Screenshots
(You can add some screenshots of Product Listing, Filters, Cart, Wishlist, etc.)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---

# 🎯 Let's Build More Amazing Projects Together!
