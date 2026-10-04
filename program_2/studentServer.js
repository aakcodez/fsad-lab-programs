const express = require('express');
const app = express();
const port = 4000; 

// Middleware to parse url-encoded data from HTML form submissions
app.use(express.urlencoded({ extended: true }));

// Helper function to return the webpage layout
const getFormHTML = (resultContent = "") => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Student Info Portal</title>
  </head>
  <body>
    <h2>Enter Student Details</h2>
    <form action="/" method="POST">
      <label>User Name:</label><br>
      <input type="text" name="name" required><br><br>
      
      <label>Branch:</label><br>
      <input type="text" name="branch" required><br><br>
      
      <label>Semester:</label><br>
      <input type="text" name="semester" required><br><br>
      
      <button type="submit">Submit Details</button>
    </form>
    <br>
    <hr>
    ${resultContent}
  </body>
  </html>
`;

// a) Handle GET method (Display blank input form)
app.get('/', (req, res) => {
  res.send(getFormHTML());
});

// a) Handle POST method (Process data and display formatted layout)
app.post('/', (req, res) => {
  const { name, branch, semester } = req.body;

  // Formatting constraints satisfied here:
  // c) Name in bold face (<b>)
  // b) Branch underlined (<u>)
  const formattedResult = `
    <h3>Submitted Student Information:</h3>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
  `;

  res.send(getFormHTML(formattedResult));
});

app.listen(port, () => {
  console.log(`Student Form Server running on http://localhost:${port}`);
});
