var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');
router.post('/api/adduserdata', db.addUserData);
router.put('/api/updateuserdata/:id', db.updateUserData);
router.get('/api/getalluser', db.getAllUserData);
router.delete('/api/deleteuser/:email', db.removeUser);

module.exports = router;
