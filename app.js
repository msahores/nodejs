const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
})

app.listen(3000);