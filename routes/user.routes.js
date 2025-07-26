const express = require('express')
const router = express.Router();


/* /user/test */
router.get('/register', (req,res) => {
    res.render('register');
})

module.exports = router; //we export this route from here and we import it in app.js
