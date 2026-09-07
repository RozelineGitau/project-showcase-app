#  SokoHub Kenya

SokoHub Kenya is a **React-based e-commerce administrator portal** designed to manage products through a simple and user-friendly interface.

The application allows administrators to view, search, add, update, and delete products. It uses **JSON Server** as a lightweight backend for storing and managing product data.

##  Features

* View all available products
* Search for products
* View individual product details
* Add new products
* Update product prices
* Delete products
* Navigate between pages using React Router
* Fetch product data using a custom React hook
* Store product data using JSON Server

## Technologies Used

* **React** – Building the user interface
* **Vite** – Development and build tool
* **React Router** – Client-side navigation
* **JavaScript (ES6+)** – Application logic
* **CSS** – Styling
* **JSON Server** – Mock REST API and data storage

## Project Structure

```text
project-showcase-app/
│
├── project-showcase-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── Product.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   │
│   │   └── index.css
│   │
│   └── ...
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

## Components 

### `App.jsx`

Defines the application's routes and connects the different pages using React Router.

### `Home.jsx`

Displays the landing page of the application.

### `Products.jsx`

Displays the list of products and provides product search functionality.

### `AddProduct.jsx`

Contains the form used to add new products.

### `Product.jsx`

Displays individual product information and provides functionality to update or delete a product.

### `Navbar.jsx`

Provides navigation links between the different sections of the application.

### `useProducts.js`

A custom React hook responsible for fetching and working with product data.

### `db.json`

Acts as the local database for the application when using JSON Server.

##  Installation

### 1. Clone the repository

```bash
git clone https://github.com/RozelineGitau/project-showcase-app.git
```

### 2. Navigate into the project

```bash
cd project-showcase-app
```

### 3. Install dependencies

```bash
npm install
```

##  Running the Application

The project requires **two terminals** because the React frontend and JSON Server backend run separately.

### Terminal 1 – Start JSON Server

```bash
npx json-server db.json --port 3001
```

The JSON Server will run on:

```text
http://localhost:3001
```

### Terminal 2 – Start React

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to use the application.

##  Application Flow

```text
User
  ↓
React Interface
  ↓
React Router
  ↓
Product Components
  ↓
Custom useProducts Hook
  ↓
JSON Server
  ↓
db.json
```

The React application communicates with JSON Server to retrieve and modify product data.

## Learning Objectives

This project demonstrates practical knowledge of:

* React components
* JSX
* React Router
* React hooks
* Custom hooks
* Fetching data from an API
* CRUD operations
* Controlled forms
* Event handling
* State management
* Component organization
* REST API concepts
* JSON Server
* CSS styling

## Author

**Rozeline Gitau**

GitHub: [RozelineGitau](https://github.com/RozelineGitau)

## Project Repository

https://github.com/RozelineGitau/project-showcase-app

## 📄 License

This project was created for educational and portfolio purposes.
