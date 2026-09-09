# SokoHub Kenya

## Project Overview

SokoHub Kenya is a simple React application for managing a collection of Kenyan products.

The application allows an administrator to:

* View available products
* View individual product details
* Add new products
* Update product prices
* Delete products
* Navigate between different pages using React Router

The project uses React for the frontend and JSON Server as a simple local backend/API.

---

## Features

### Home Page

The home page introduces SokoHub Kenya and provides a link to view the available products.

### Products Page

The products page displays all products stored in the database.

Each product displays:

* Product name
* Description
* Category
* Price
* Link to view more details

### Product Details

Each product has its own details page.

The administrator can:

* View the product information
* Change the product price
* Delete the product

### Add Product

The Add Product page contains a form for creating a new product.

The form collects:

* Product name
* Price
* Category
* Description

After submitting the form, the new product is saved to the JSON Server database.

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

Sets up the application's routes using React Router.

### `Navbar.jsx`

Provides navigation links to the different pages.

### `Home.jsx`

Displays the application's welcome page.

### `Products.jsx`

Fetches and displays the list of products.

### `Product.jsx`

Displays details for one product and provides options to update its price or delete it.

### `AddProduct.jsx`

Contains the form used to add new products.

### `useProducts.js`

A custom React hook that fetches products from the JSON Server API.

---

## Data

Product information is stored in:

```text
db.json
```

The database contains products with the following information:

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

### 1. Clone the repository

```bash
git clone https://github.com/RozelineGitau/project-showcase-app.git
```

### 2. Open the project

```bash
cd project-showcase-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React application

```bash
npm run dev
```

Vite will provide a local URL, usually:

```text
http://localhost:5173
```

### 5. Start JSON Server

Open a second terminal in the project folder and run:

```bash
npm run server
```

JSON Server will run on:

```text
http://localhost:3000
```

The products API is available at:

```text
http://localhost:3000/products
```

---

## Running the Application

Two terminals are required when developing the application.

### Terminal 1

```bash
npm run dev
```

This runs the React application.

### Terminal 2

```bash
npm run server
```

This runs the JSON Server API.

The React application communicates with the API through:

```text
http://localhost:3000/products
```

---

## Available Routes

| Route           | Description          |
| --------------- | -------------------- |
| `/`             | Home page            |
| `/products`     | View all products    |
| `/add`          | Add a new product    |
| `/products/:id` | View product details |

---

## API Operations

The application uses the JSON Server API to manage products.

### Get all products

```text
GET /products
```

### Get one product

```text
GET /products/:id
```

### Add a product

```text
POST /products
```

### Update a product

```text
PATCH /products/:id
```

### Delete a product

```text
DELETE /products/:id
```

---

## Testing the Build

To check that the application can successfully build for production, run:

```bash
npm run build
```

A successful build should produce a `dist` folder without errors.

---

## Git and GitHub

The project uses Git for version control.

The `.gitignore` file prevents unnecessary files such as `node_modules` and `dist` from being committed.



## Author

**Rozeline Gitau**

GitHub username:RozelineGitau

https://github.com/RozelineGitau
