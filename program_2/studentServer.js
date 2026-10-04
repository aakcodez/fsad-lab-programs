const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Force Express to serve index.html as the root page '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback static middleware
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// 1. GET method handler
app.get('/submit-get', (req, res) => {
    const name = req.query.name;
    const branch = req.query.branch;
    const semester = req.query.semester;

    res.send(`
        <h2>Student Information (Processed via GET)</h2>
        <p>Name: <b>${name}</b></p>
        <p>Branch: <u>${branch}</u></p>
        <p>Semester: ${semester}</p>
        <br><a href="/">Go Back to Form</a>
    `);
});

// 2. POST method handler
app.post('/submit-post', (req, res) => {
    const name = req.body.name;
    const branch = req.body.branch;
    const semester = req.body.semester;

    res.send(`
        <h2>Student Information (Processed via POST)</h2>
        <p>Name: <b>${name}</b></p>
        <p>Branch: <u>${branch}</u></p>
        <p>Semester: ${semester}</p>
        <hr><br><a href="/">Go Back to Form</a>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
