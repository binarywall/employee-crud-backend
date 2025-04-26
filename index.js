const app=require("./app");
require('dotenv').config();

const mongoconnet=require("./src/db/connection/index");

const port=process.env.PORT;
const MONGO_URI=process.env.MONGO_URI


mongoconnet(MONGO_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`Database is connected and server is Running on port : ${port}`)
    })
}).catch(err=>console.error(err))