const productFromDB = require("../models/product");

const getAllProducts = async(req,res) => {
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex: name, $options: "i"};// "i" indicates case insensitive
    }
    if(featured){
        queryObject.featured = featured;
    }
    let productObjectTemp = productFromDB.find(queryObject);// we dont get the entire myData but we do obtain the query strings and parameters
    if(sort){
        let sortTemp = sort.replaceAll(","," ");
        productObjectTemp=productObjectTemp.sort(sortTemp);
    }
    if(select){
        let selectTemp = select.replaceAll(","," ");// we could have spilt(",").join(" ") as an alternative approach but replaceAll() is more efficient
        productObjectTemp=productObjectTemp.select(selectTemp);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page-1)*limit;
    const Products = await productObjectTemp.skip(skip).limit(limit);

    res.status(200).json({Products});
}

const getAllProductsTesting = async(req,res) => {
    const data = await productFromDB.find(req.query).skip(2);
    res.status(200).json({data});}

module.exports = {getAllProducts, getAllProductsTesting};