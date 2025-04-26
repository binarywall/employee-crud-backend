const Employee=require("../../schemas/employee")

//create Employee

const create=async (employeeData)=>{
    const {email,phone}=employeeData;
    const existing =await Employee.findOne({email,phone});
    if(existing) throw new Error('Employ Already Exists ...')
    
    const employee=new Employee(employeeData);
    return await employee.save();
}

const get=async()=>{
    return await Employee.find();
}

const updateEmp=async(id,updatedData)=>{
    const employee=await Employee.findById(id);
    if(!employee) throw new Error('Employ not Exists ...');
    Object.assign(employee,updatedData);
    return await employee.save();
}

const del=async(id)=>{
    const employee=await Employee.findByIdAndDelete(id);
    if(!employee) throw new Error('Employ not Exists ...');
    return employee;   
}

module.exports={create,get,updateEmp,del}