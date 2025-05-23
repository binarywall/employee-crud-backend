const multer =require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'src/uploads/')
    },
    filename:function(req,file,cb){
        const fileName=Date.now()+"-"+file.originalname;
        cb(null,fileName)
    }
})

const upload=multer({storage});

module.exports=upload;