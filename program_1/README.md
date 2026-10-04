# Program 1: Online Book Cart CRUD API

Demonstration of a complete RESTful API to perform CRUD (Create, Read, Update, Delete) operations on an online Book Cart repository using the **Express Framework**.

## 🏗️ Working Structure
* **`booksrep.js`**: The Data Repository layer. It acts as an in-memory database storing the array of book objects and holds functions to query, add, modify, or remove data.
* **`booksauthority.js`**: The Controller/Server layer. It sets up the Express server, intercepts incoming API requests, calls the respective repository helper, and returns data arrays formatted as JSON.

## 🚀 Execution Commands
Run the server from your project root folder:
```bash
node program_1/booksauthority.js
```

Since browsers only execute GET requests from the URL bar, open a separate terminal window and run these `curl` commands to test the full CRUD capabilities:

* **READ All Books (GET)**:
  ```bash
  curl http://localhost:3000/
  ```
* **CREATE a New Book (POST)**:
  ```bash
  curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"id": 4, "title": "Brave New World", "author": "Aldous Huxley"}'
  ```
* **UPDATE a Book (PUT)**:
  ```bash
  curl -X PUT http://localhost:3000/4 -H "Content-Type: application/json" -d '{"title": "Brave New World (Updated Ed.)"}'
  ```
* **DELETE a Book (DELETE)**:
  ```bash
  curl -X DELETE http://localhost:3000/1
  ```

---

## 💡 Important Things to Remember / Viva Questions

### 1. What does `app.use(express.json())` do?
It is a built-in Express middleware that parses incoming raw request bodies formatted as JSON data. Without this, `req.body` will return `undefined`, and your POST/PUT operations will crash or fail to read incoming payloads.

### 2. How are dynamic route parameters captured?
By adding a colon in front of a route path string segment (e.g., `/:id`). Express automatically extracts that specific part of the request path URL and maps it onto the **`req.params`** object (e.g., `req.params.id`).

### 3. What HTTP Status Codes are used here and what do they mean?
* **`200 OK`**: The request succeeded, and data was retrieved or updated successfully.
* **`201 Created`**: The request succeeded, and a new resource (a book) was successfully added to the cart array.

### 4. What is the difference between `PUT` and `POST`?
* **`POST`** is utilized to create an entirely new record or item in the system.
* **`PUT`** is utilized to update or replace an existing record targeted by a specific unique identifier.
