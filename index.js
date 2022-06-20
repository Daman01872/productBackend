const express =require('express');
const Product = require("./Product");

const app = express();
require("./config");
const product = require("./Product");
app.use(express.json());

app.post('/product',async(req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.listen(8080,()=>{
    console.log("Listening to port 8080")
});