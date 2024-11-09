import express from 'express';
import mongoose from 'mongoose';
// import signup from './Routes/authuser.js';
import routes from './Routes/indexRoute.js'

import User from './model/user.model.js'
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, (req, res) => {
  console.log(`Server started at ${PORT}`);

});

// app.use('/api',signup);
main()
  .then(() => {
    console.log("DB connected!")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskUser');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use("/api", routes);


