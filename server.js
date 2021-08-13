const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({extname: "hbs",
defaultLayout: false,
layoutsDir: "views/layouts/"}));
app.set('view engine', 'handlebars');
    
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/create', function (req, res) {
    res.render('layouts/create');
});

app.listen(PORT, () => console.log("Now listening"));
