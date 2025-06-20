const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable frontend access

mongoose.connect('mongodb://mongo:27017/usersdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send(`User ${req.body.name} added`);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
