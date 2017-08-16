const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
  //res.send('<p>about page</p>');
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000 since ${new Date()}`);
});