const express = require('express');
const authMiddlewares = require('../middlewares/auth')

const router = express.Router();
const upload = require('../config/multer.config')
const fileModel = require('../models/files.models') // for handle files

router.get('/home', authMiddlewares, async (req,res) => { //we apply authentocation for /home because we wnat only authenticate user can see the home page
    
    const userFiles = await fileModel.find({ //it find all files that a user uploaded 
        user: req.user.userId
    })
    console.log(req.res); //print user imformation on terminal
    
    res.render('home');
    
})



router.post('/upload', authMiddlewares, upload.single('file'), async(req,res) => {
    const newfile = await fileModel.create({
        path:req.file.path,      // to create a file we need a path  
        originalname:req.file.originalname,          //when we uploaded our file then we create new file
        user: req.user.userId
    })                    //now we need user authentication
    res.json(newfile)
})  

module.exports = router;