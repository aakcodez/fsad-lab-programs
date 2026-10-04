# Program 2: Student Information Portal (GET & POST)

An interactive Full Stack application built using **Express** that serves a styled HTML form page to capture user inputs (`Name`, `Branch`, `Semester`) and dynamically formats the processed data payload output.

## 🏗️ Working Structure
* **`index.html`**: The static frontend UI layout. It includes CSS styling wrappers and exposes two isolated forms—one mapped to a standard GET endpoint and another mapped to a POST endpoint.
* **`studentServer.js`**: The backend tracking controller. It registers file routing paths, serves the interactive interface, handles inbound queries, and generates formatted HTML outputs matching exact stylistic criteria.

## 🚀 Execution Commands
Navigate inside the `program_2` folder and run the server file:
```bash
cd program_2
node studentServer.js
```
Open your standard web browser and access the interface link:
👉 `http://localhost:4000/`

---

## 💡 Important Things to Remember / Viva Questions

### 1. What is the role of `express.static(__dirname)`?
It is a middleware that tells Express to turn the specified directory into a public folder. This allows the server to automatically serve flat static files (like `index.html`, style sheets, or client-side JS) straight to the web browser when requested.

### 2. What is the core difference between `req.query` and `req.body`?
* **`req.query`**: Handles data sent via **GET** requests. The form data properties are visible in plain text appended to the URL address bar as key-value query strings (e.g., `?name=Anvita&branch=MCA`).
* **`req.body`**: Handles data sent via **POST** requests. The form properties are bundled secretly inside the HTTP request body payload and are not visible in the browser's URL address bar.

### 3. What does `app.use(express.urlencoded({ extended: true }))` do?
It is the built-in form-parsing middleware. When an HTML form is submitted via a POST request, the browser sends the keys and values as an encoded string. This middleware decodes that string and populates the data inside the **`req.body`** object.

### 4. How did you fulfill the visual formatting criteria?
The assignment requested **Name in Bold** and <u>Branch Underlined</u>. This was implemented dynamically using standard HTML tags in the server response string:
* Name was wrapped inside **`<b>${name}</b>`** or `<strong>`.
* Branch was wrapped inside <u>`<u>${branch}</u>`</u>.
