

var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var User = require('./models/users');
const { password } = require('pg/lib/defaults');
var app = express();
const port = 3002;

app.use(express.json());

app.listen(port, () => {
    console.log(`Welcome to backend server\nURL: http://localhost:${port}`);
});


mdb.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB connection successfull");
    })
    .catch((err) => {
        console.log("Check your connection string", err);
    });


app.get('/', (req, res) => {
    res.send("Welcome to backend server");
});

app.get('/static', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/signup', async (req, res) => {
    console.log(req.body);
    var { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);

    try {
        /*var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password:password
        });*/
        var newUser = new User(req.body)
        console.log(req.body.password)
        await newUser.save();
        console.log("User added successfully");
        res.status(200).send("User added successfully");
    } catch (err) {
        console.error("Error adding user:", err);
        res.status(500).send("Error adding user");
    }
});

app.get('/getsignup', async (req, res) => {
    try {
        var allSignupRecord = await User.find();
        res.json(allSignupRecord);
        console.log("All data fetched");
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Error fetching data");
    }
});
app.post('/login', async (req, res) => {
    var { email, password } = req.body
    try {
        var existingUser = await User.findOne({ email: email })
        console.log(existingUser)
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "invalid password", isloggedIn: false })
            }
            else {
                res.json({ message: "login sucess", isloggedIn: true })

            }
            res.json({ message: "login sucess", isloggedIn: true })

        }
        else {
            res.json({ message: "login failed", isloggedIn: false })

        }
    }
    catch (err) {
        console.log("login failed")
    }
})

app.get('/json', (req, res) => {
    res.json({ server: "Welcome to backend server", url: "localhost", port: port });
});

