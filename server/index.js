const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://kashishbhanushali7:H7OtsaVhC4TvjmVn@cluster0.hlcbodb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post('/createUser', async (req, res) => {
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err => res.json({message: err}))
    }
)


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});