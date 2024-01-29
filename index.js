import express from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";





const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("uploads"));


mongoose.connect("mongodb://localhost:27017/libraryDb")
    .then(() => {
        console.log("Database Created Successfully");
    })
    .catch((err) => {
        console.log(err);
    });


app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});