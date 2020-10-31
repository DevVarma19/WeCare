const express = require('express');
const hbs = require('hbs');
const path = require('path');

// Declaring the PORT
const port = process.env.PORT || 3000;

// Declaring the paths
const publicDirectoryPath = path.join(__dirname, '../public/frontend');
const partialDirectoryPath = path.join(__dirname, '../templates/partials');
const viewDirectoryPath = path.join(__dirname, '../templates/views');

// Creating the app
const app = express();
app.set("view engine", 'hbs');

//  Registering the public and partial directories to the app
app.use(express.static(publicDirectoryPath));
app.set('views', viewDirectoryPath);
hbs.registerPartials(partialDirectoryPath)

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/services', (req, res) => {
    res.render("services");
});

app.get('/blog', (req, res) => {
    res.render("blog");
});

app.get('/contact', (req, res) => {
    res.render("contact");
})

//listening to the port
app.listen(port, () => {
    console.log("SERVER UP ON PORT : " + port);
});