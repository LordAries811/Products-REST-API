require("dotenv").config();
const ProductSchema = require("./models/product");
const connectDB = require("./db/db_connect");
const ProductJSON = require("./storeDataJSON.json");

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await ProductSchema.deleteMany();
        await ProductSchema.create(ProductJSON);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();
