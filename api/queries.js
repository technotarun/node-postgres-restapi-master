var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:tarun@localhost:5432/users'; // startrek is an example database name
var db = pgp(connectionString);


/////////////////////
// Query Functions
/////////////////////

function addUserData(req, res, next) {
  db.none('INSERT INTO user_details(name, email, contact, address, hobbies)' +
      'values(${name}, ${email}, ${contact}, ${address}, ${hobbies})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'user added'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateUserData(req, res, next) {
  db.none(`UPDATE user_details SET name='${req.body.name}', email='${req.body.email}', contact='${req.body.contact}', address='${req.body.address}', hobbies='${req.body.hobbies}' where id='${req.body.id}'`)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated user details'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllUserData(req, res, next) {
  db.any("SELECT * FROM user_details")
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all expenses'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeUser(req, res, next) {
  db.result(`DELETE FROM user_details WHERE email = '${req.params.email}'`)
    .then(function (result) {
      res.status(200)
        .json({
          result: result,
          status: 'success',
          message: `Removed ${result.rowCount} user_details`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/////////////
// Exports
/////////////

module.exports = {
    addUserData: addUserData,
    updateUserData: updateUserData,
    getAllUserData: getAllUserData,
    removeUser: removeUser,
};
