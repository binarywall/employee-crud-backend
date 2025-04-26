const {create,get,updateEmp,del}=require("../../db/queries/employee/index");

const createEmployee=async(req,res)=>{
    try {
        const data={...req.body,file:req.file?.filename}
        const employee=await create(data);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAll=async(req,res)=>{
    try {
        const employee=await get();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateEmployee=async(req,res)=>{
    try {
        const id=req.params.id;
        const data={
            ...req.body,
            ...req.file && {file:req.file.filename}
        }
        const update=await updateEmp(id,data);
        res.json(update)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteEmployee=async(req,res)=>{
    const id=req.params.id
    console.log(id,"...delete Emp")
    try {
        const result=await del(id);
        res.json({message:'Employee Deleted',result})
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports={
    createEmployee,
    getAll,
    updateEmployee,
    deleteEmployee
}