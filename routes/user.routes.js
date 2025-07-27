const express = require('express')
const router = express.Router();

const { body, validationResult } = require('express-validator');

/* /user/test */
router.get('/register', (req,res) => {
    res.render('register');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 13}),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3}),
    (req,res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.send("Inavalid data")
    }

    res.send(errors)
})

module.exports = router; //we export this route from here and we import it in app.js
