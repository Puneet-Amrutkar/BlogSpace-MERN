const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/blogsapp", {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err);
})

// env config
dotenv.config();

// rest object
const app = express();

// middelwares
app.use(bodyParser.json( {extended : true } ));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// router
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Port
const PORT = process.env.PORT || 8000;
// listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port ${PORT}`
  );
});