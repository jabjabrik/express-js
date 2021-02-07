/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const router = express.Router();

router.get('/products', (req, res, next) => {
  res.json({ name: 'yusuf', email: 'yusufjabriko@gmail.com' });
  next();
});

router.get('/price', (req, res, next) => {
  res.json({ sabun: 10000 });
  next();
});

app.use('/', router);

app.listen(4000);
