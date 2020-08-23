import Express from "express";
import  products  from "./products.js";
const app = Express();
const port = 5000;
// GET, PUT, POST, DELETE
//They have different parameters, ("Path",middleware, (req, res)=>{})
// app.get("/product/:id",(req, res)=>{
//     //  res.send( req.params.id );
//     res.json(products.filter(product => Number(req.params.id) === product.id)); 
//     // res.send("hello Wordl!")
// });

// app.post();
// app.delete();
// app.put();

app.listen(port, ()=>console.log("listening on port"+port));

