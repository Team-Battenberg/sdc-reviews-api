const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


//change to Get Review
const getAllReviews = function(callback) {
  // TODO: - your code here!
  console.log('in reviews')
  let queryString = "select * from reviews"
  connection.query(queryString, (err, results) => {
    if(err){
      console.log('ERROR', err)
    }
    callback(err, results)
  })
};

//get Review Meta
const getReviewMeta = function(callback) {
  //fix
  let queryString = "select * from reviews" 
  connection.query(queryString, (err, results) => {
    callback(err, results)
  })
};

const postReview = function(params, callback) {

  let queryString = 
    "insert into reviews(column1, column2) values (?, ?)";

  //note params needs to be an array
  console.log("sql params: ", params);
  connection.query(queryString, params, (err, results) => {
    callback(err, results)
  })
};

const markHelpful = function(params, callback) {
  //write update sql here 
  //literally just set helpful = helpful + 1
}

const reportReview = function(params, callback) {
  //write update sql here 
  //literally just set report = report + 1
}

module.exports = {
  getAllReviews : getAllReviews,
  getReviewMeta : getReviewMeta,
  postReview : postReview,
  markHelpful: markHelpful,
  reportReview: reportReview
};
