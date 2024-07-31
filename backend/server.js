const express = require("express");
const app = express();
const router = require("./router/contact-router");

app.use("/api/contact" , router);

app.get("/" , (req,res) => {
    res.status(200).send("HELLO WORLD");
});


const PORT = 5000;

app.listen(PORT , () =>{
    console.log(`server is running at port ${PORT}`);
});