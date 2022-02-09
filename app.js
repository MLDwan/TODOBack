const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const apiRoutes = require("./src/modules/routes/routes")

app.use(cors());

const uri = "mongodb+srv://user:user@cluster0.x2u0b.mongodb.net/todoList?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/', apiRoutes);

app.listen(8000, () => {});