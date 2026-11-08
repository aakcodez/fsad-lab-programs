## Step 1: Initialize Project & Install Dependencies

Execute the following commands to create the application structure and install necessary modules:

```bash
cd ~/Documents/3rd\ sem/FSAD/fsad-lab-programs
npx create-react-app program_6
cd program_6
npm install express cors axios


# 1. Create Backend: myinventory.js
cat << 'EOF' > myinventory.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const inventory = [
  { id: 1, prodname: "prod1", qty: 12, price: 12 },
  { id: 2, prodname: "prod2", qty: 1, price: 13 },
  { id: 3, prodname: "prod3", qty: 10, price: 14 },
  { id: 4, prodname: "prod4", qty: 19, price: 16 }
];

app.get('/', (req, res) => {
  res.json(inventory);
});

app.post('/add', (req, res) => {
  console.log(req.body.id);
  const invent = {
    id: req.body.id,
    prodname: req.body.prodname,
    qty: req.body.qty,
    price: req.body.price
  };
  inventory.push(invent);
  res.json(inventory);
});

app.listen(8000, () => {
  console.log('Express is working at http://localhost:8000');
});
EOF

# 2. Create React Components: src/to_inventory.js
cat << 'EOF' > src/to_inventory.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Display_Inventory() {
  const [res, setres] = useState([]);

  useEffect(() => {
    const resp = async () => {
      const response = await axios.get("http://localhost:8000");
      console.log("asdfasdf", response.data);
      setres(response.data);
    };
    resp();
  }, []);

  return (
    <div>
      <h1>Inventory Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {res.map((inventory) => (
            <tr key={inventory.id}>
              <td>{inventory.id}</td>
              <td>{inventory.prodname || inventory.name}</td>
              <td>{inventory.qty}</td>
              <td>{inventory.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AddInventory() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState([]);

  const SubmitEvent = async () => {
    const fo = { id: id, prodname: name, qty: qty, price: price };
    console.log("fo ", fo);
    await axios.post("http://localhost:8000/add", fo);
    const getresponse = await axios.get("http://localhost:8000");
    setInventory(getresponse.data);
  };

  return (
    <div>
      <h1>Inventory Management1</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>
              <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input type="text" name="prodname" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>
              <input type="number" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" name="onSubmit" value="Submit" onClick={SubmitEvent} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Display_Inventory, AddInventory };
EOF

# 3. Update Entry Point: src/index.js
cat << 'EOF' > src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AddInventory, Display_Inventory } from './to_inventory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display_Inventory />
    <AddInventory />
  </React.StrictMode>
);
EOF

# 4. Overwrite README.md
cat << 'EOF' > README.md
# Program 6: React and Express Inventory Management System

This project demonstrates Full Stack connectivity between a **React frontend** (running on port `3000`) and a **Node.js / Express backend** (running on port `8000`) for managing an inventory database using RESTful APIs (`GET` and `POST`).

---

## Prerequisites & Tech Stack
* **Node.js** (v14+ recommended)
* **npm** (Node Package Manager)
* **React** (Frontend library)
* **Express** (Backend framework)
* **Axios** (HTTP Client for React-Node communication)
* **Cors** (Cross-Origin Resource Sharing middleware)

---

