const mongoose = require("mongoose");

//schema/model for our api--->//name //price //featured //rating //createdAt //company
//visualize this as the rows/tuples in our table 

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: [true, "Please provide your name"],
    },
    price: {
        type: Number,
        //required: [true, "Please provide the price"],
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        //required: [true, "Please provide the rating"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "dell", "samsung", "mi"],
            //message: `${VALUE} is not supported`,
        }
    }
});

//now we need to add this schema in a COLLECTION(visualize it as a table in relational db)
module.exports = mongoose.model("Product", productSchema);