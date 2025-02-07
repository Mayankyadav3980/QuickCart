# QuickCart 🛒

QuickCart is a Quick e-commerce application built using **React** and **Redux**. It provides essential shopping functionalities like product listing, cart management, and navigation. The cart items are stored in **localStorage** to ensure data persistence, and all product data is fetched from **my-json-server APIs**.

## 🚀 Features

- **Product Listing:** Displays products fetched from my-json-server API.
- **Shopping Cart:** Add/remove products from the cart.
- **Local Storage Support:** Cart data persists even after page reload.
- **Routing:** Uses `react-router-dom` for seamless navigation.
- **State Management:** Uses Redux for efficient state handling.

## 🛠️ Tech Stack

- **Frontend:** React, Redux, React Router
- **State Management:** Redux Toolkit
- **Data Fetching:** my-json-server API
- **Persistence:** LocalStorage
- **Bundler:** Vite

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/QuickCart.git
cd QuickCart
npm install
```

## 🚀 Usage

To start the development server:

```sh
npm run dev
```

Then, open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Deployment

### **GitHub Pages**

If you want to deploy the project using GitHub Pages, update `vite.config.js`:

```js
export default defineConfig({
  base: "/your-repo-name/",
});
```

Then, run:

```sh
npm run build
npm run deploy
```

### **Netlify Deployment**

1. **Build the Project**:
   ```sh
   npm run build
   ```
2. **Drag & Drop** the `dist/` folder into Netlify OR deploy using GitHub.
3. **Handle Routing Issues:**
   - Create a `_redirects` file inside `public/` and add:
     ```
     /* /index.html 200
     ```

## 📜 Folder Structure

```
QuickCart/
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── store/          # Redux store setup
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│── public/
│── package.json
│── vite.config.js
│── README.md
```

## 📌 Future Enhancements

- ✅ User Authentication
- ✅ Order History
- ✅ Search & Filtering
- ✅ Payment Gateway Integration

## 👨‍💻 Author

- \*\*Mayank \*\*– [GitHub](https://github.com/Mayankyadav3980)

##

