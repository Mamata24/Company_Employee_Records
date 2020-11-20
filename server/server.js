const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");

const employerRouter = require("./Routes/employerRouter");
const employeeRouter = require("./Routes/employeeRouter");

dotenv.config();
const app = express();
require("./mongoose");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use(employerRouter);
app.use(employeeRouter)

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});