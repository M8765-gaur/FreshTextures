// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Wallpaper',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

//Signup
app.post('/users', (req, res) => {
    const { name, email, password, dob, gender } = req.body;
    
    console.log('Signup Data:', req.body); 


    const query = 'INSERT INTO nature (name, email, password, dob, gender) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, password, dob, gender], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Database insert failed', error: err });
        }

        res.status(201).json({
            id: results.insertId, name, email, password, dob, gender
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Login

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    
    const query = 'SELECT * FROM nature WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.log(req.body);
            return res.status(500).json({ message: 'Server error' });
        }

        if (results.length > 0) {
            if (results[0].password === password) {
                res.status(200).json({ message: 'Login successful', name: results[0].name });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});


// Contact Us
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const query = 'INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, subject, message], (err, results) => {
        if (err) {
            console.error('Error saving contact message:', err);
            return res.status(500).json({ message: 'Failed to save contact message', error: err });
        }

        res.status(201).json({ message: 'Message sent successfully' });
    });
});
