# SokoHub Kenya

## Project Overview

SokoHub Kenya is a React web application that allows an administrator to manage a collection of Kenyan products.

The application allows the administrator to:

* View all products
* View individual product details
* Add new products
* Update product prices
* Delete products
* Navigate between pages using React Router

The project uses **React and Vite** for the frontend and **JSON Server** as a local REST API for storing and managing product data.

---

## Features

### Home Page

The home page introduces SokoHub Kenya and provides navigation to the products section.

### Products Page

The products page displays all available products from the JSON Server API.

Each product displays:

* Product name
* Description
* Category
* Price
* Link to view product details

### Product Details

The product details page displays information about a selected product.

The administrator can:

* View product information
* Update the product price
* Delete the product

### Add Product

The Add Product page provides a form for creating a new product.

The form collects:

* Product name
* Price
* Category
* Description

After submission, the product is saved to the JSON Server database.

### Navigation

React Router is used to navigate between:

* Home
* Products
* Add Product
* Product Details

---

## Technologies Used

* React
* JavaScript
* JSX
* React Router
* Vite
* JSON Server
* HTML
* CSS
* Git
* GitHub

---

## Project Structure

```text
project-showcase-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── AddProduct.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   ├── Products.jsx
│   │   └── useProducts.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Components

### `App.jsx`

Defines the application's routes using React Router.

### `Navbar.jsx`

Provides navigation links between the different pages.

### `Home.jsx`

Displays the application's welcome page.

### `Products.jsx`

Fetches and displays all products from the JSON Server API.

### `Product.jsx`

Displays details for an individual product and allows the administrator to update its price or delete it.

### `AddProduct.jsx`

Contains the form used to add a new product.

### `useProducts.js`

A custom React hook responsible for fetching product data from the API.

---

## Data

Product information is stored in:

```text
db.json
```

The database contains a `products` collection.

Example:

```json
{
  "id": "1",
  "name": "Kenyan Coffee",
  "description": "Premium coffee from Nyeri.",
  "price": 1200,
  "category": "Coffee"
}
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RozelineGitau/project-showcase-app.git
```

### 2. Navigate to the Project

```bash
cd project-showcase-app
```

### 3. Install Dependencies

```bash
npm install
```

JSON Server is already included as a project dependency, so there is **no need to install it separately**.

---

## Running the Application

The application requires two running processes: the React development server and JSON Server.

### Terminal 1 — Start JSON Server

From the project directory, run:

```bash
npm run server
```

JSON Server will start on:

```text
http://localhost:3000
```

The products API is available at:

```text
http://localhost:3000/products
```

### Terminal 2 — Start React

Open a second terminal in the project directory and run:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the provided Vite URL in your browser.

---

## Available Routes

| Route           | Description          |
| --------------- | -------------------- |
| `/`             | Home page            |
| `/products`     | View all products    |
| `/add`          | Add a new product    |
| `/products/:id` | View product details |

---

## API Endpoints

The application communicates with JSON Server through the following endpoints:

### Get All Products

```text
GET http://localhost:3000/products
```

### Get One Product

```text
GET http://localhost:3000/products/:id
```

### Add a Product

```text
POST http://localhost:3000/products
```

### Update a Product

```text
PATCH http://localhost:3000/products/:id
```

### Delete a Product

```text
DELETE http://localhost:3000/products/:id
```

---

## Available Scripts

### Start React Development Server

```bash
npm run dev
```

### Start JSON Server

```bash
npm run server
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

---

## Production Build

To check that the React application builds successfully, run:

```bash
npm run build
```

A successful build creates a `dist` directory.

The `dist` directory is excluded from Git using `.gitignore`.

---

## Git and `.gitignore`

The project includes a `.gitignore` file to prevent unnecessary files from being committed to GitHub.

It includes:

```text
node_modules/
dist/
.env
.env.local
```

This prevents dependencies, build files, and local environment files from being tracked by Git.

---

## Future Improvements

If additional development time is available, the following features could be added:

* Product search
* Category filtering
* Product images
* Improved form validation
* Better loading and error messages
* Responsive design improvements
* Administrator authentication
* Product sorting
* Confirmation messages for successful actions

---

## Author

**Rozeline Gitau**

GitHub:
https://github.com/RozelineGitau
