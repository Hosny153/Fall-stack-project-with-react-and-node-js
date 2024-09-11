const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Port = 4000;
const app = express();
const query = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"shopping"
});

app.use(express.json());
app.use(cors());

app.get("/Products",(req,res)=>{
    query.execute(`SELECT * FROM products`,(err,data)=>{
        if(err){
            res.status(500).json({message:'Error',Error:err});
        }else{
            res.status(200).json({message:'Success',Data:data});
        }
    });
});

app.get("/Products/:id",(req,res)=>{
    const {id} = req.params;
    query.execute(`SELECT * FROM products WHERE id=${id}`,(err,data)=>{
        if(err){
            res.status(500).json({message:'Error',Error:err});
        }else{
            res.status(200).json({message:'Success',Data:data});
        }
    });
});


app.post("/AddProducts",(req,res)=>{
    const {image,name,descrption,price} = req.body;
    query.execute(`INSERT INTO products(image, name, descrption, price) VALUES ('${image}','${name}','${descrption}','${price}')`);
    res.json({message:'Products added sucessfully.'});
});



app.put("/UpdProducts",(req,res)=>{
    const {id,image,name,descrption,price} = req.body;
    query.execute(`UPDATE products SET image='${image}',name='${name}',descrption='${descrption}',price='${price}' WHERE id='${id}'`);
    res.json({message:'Products updated sucessfully.'});
});

app.delete("DelProducts",(req,res)=>{
    const {id} = req.body;
    query.execute(`DELETE FROM products WHERE id=${id}`);
    res.json({message:'Products deleted sucessfully.'});
});







app.listen(Port,()=>{console.log(`Server is running on port ${Port}`)});
