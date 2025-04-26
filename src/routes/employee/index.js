const express=require('express');
const router=express.Router();

const upload=require('../../middleware/upload');
const employeeController=require('../../controllers/employee/index');


router.get('/',employeeController.getAll);
router.post('/',upload.single('file'),employeeController.createEmployee);
router.put('/:id',upload.single('file'),employeeController.updateEmployee);
router.delete('/:id',employeeController.deleteEmployee);

module.exports=router;
