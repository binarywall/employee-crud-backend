const express=require("express"); //for creating server
const cors=require("cors"); // for connecting 2 differnt ports
const path=require("path");
const employeeRoutes=require('./src/routes/employee/index')

const app=express();

app.use(cors());
app.use(express.json());
const filePath=(express.static(path.join(__dirname,'src/uploads')))

app.use('/uploads',filePath)
app.use('/emp',employeeRoutes);

module.exports=app