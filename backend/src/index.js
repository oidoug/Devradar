const express = require('express');
const mongo = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongo.connect('mongodb+srv://backend:RvDP49tFXu0aGoG9@rocketseat-7t0me.mongodb.net/devradar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
