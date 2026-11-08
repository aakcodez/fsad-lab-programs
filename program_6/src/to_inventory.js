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
