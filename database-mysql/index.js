const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


//change to Get Review
const getReviews = function(params, callback) {
  console.log('in reviews')
  console.log(params.product_id);


  //how do i improve error handling here?
  if(params.product_id === undefined){
    throw new Error("define product id");
    //set this up better should not return 500
  } 

  //NOTE: i have to define what "relevant" is in this API
    //...that probably just means sort by helpfulness

  let queryString = `
    select 
      *, 
      (select group_concat(c.url) from sdc.reviews_photos c where c.review_id = a.id) 
        as photos 
      from sdc.reviews a 
    where a.product_id = ? order by a.helpfulness desc limit 100
  `
  // => try to turn this into a view 

  connection.query(queryString, [params.product_id], (err, results) => {
    if(err){
      console.log('ERROR', err)
    }
    // console.log(results)
    for(row in results) {
      // console.log(results[row], results[row].photos)
      if(results[row]["photos"] !== null) {

        let photos = results[row]["photos"].split(",").map((url, i)=> {
          return {
            "id": i + 1,
            "url": url
          }
        })
        results[row]["photos"] = photos;
      }
    }

    //TODO: pagination
      //-> can grab count of reviews and just delete line in the results in above loop
    let returnObj = {
      "product": params.product_id.toString(),
      "page": 0,
      "count": results.length,
      "results": results
    }

    callback(err, returnObj);
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
  getReviews : getReviews,
  getReviewMeta : getReviewMeta,
  postReview : postReview,
  markHelpful: markHelpful,
  reportReview: reportReview
};
