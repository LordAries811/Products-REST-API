require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/db_connect");

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product");

app.get("/",(req,res) => {
    res.send("Hi!! I am live....");
})

app.use("/api/products",product_routes);

const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Connected on ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();