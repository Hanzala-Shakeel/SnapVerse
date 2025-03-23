require('dotenv').config();
require("./config/databaseConfig");
const express = require("express");
const { app, server } = require("./socket/socket");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
const path = require("path");

const ___dirname = path.resolve();

console.log(___dirname);

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true // Allow credentials (cookies) to be included
}));

app.use(cookieParser());

app.use("/", router);

app.use(express.static(path.join(___dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(___dirname, "frontend", "dist", "index.html"));
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})