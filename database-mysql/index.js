const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  // TODO: - your code here!
  let queryString = "select * from transactions"
  connection.query(queryString, (err, results) => {
    callback(err, results)
  })
};

const getAllCategories = function(callback) {
  let queryString = "select * from categories"
  connection.query(queryString, (err, results) => {
    callback(err, results)
  })
};

const postCategory = function(params, callback) {
  let queryString = 
    "insert into categories(category, budget) values (?, ?)";

  //note params needs to be an array
  console.log("sql params: ", params);
  connection.query(queryString, params, (err, results) => {
    callback(err, results)
  })
};

const setTransactionCategory = function(params, callback) {
  //write update sql here for transaction table and simply take in a category fk

  //i need to setup my transaction table fk to depend on category 
  //so the user can't set a nonexistent category id (and mysql just returns error if they try)

}

module.exports = {
  getAllTransactions : getAllTransactions,
  getAllCategories : getAllCategories,
  postCategory : postCategory,
  setTransactionCategory: setTransactionCategory
};
