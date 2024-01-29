// routes.js

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is the home route!");
});

router.get("/about", (req, res) => {
    res.send("This is the about route!");
});

export default router;
