const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const apiRoutes = require("./src/modules/routes/routes")

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

const uri = "mongodb+srv://user:user@cluster0.x2u0b.mongodb.net/todoList?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true });


app.listen(8000, () => {});