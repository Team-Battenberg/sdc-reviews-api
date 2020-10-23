const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database-mysql");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//?
app.use(bodyParser.urlencoded({ extended: true }));


//get review
app.get("/reviews", (req, res) => {
  console.log("get review")

  console.log(req.body)

  // TODO: get based on product/id

  db.getReviews(req.body, (err, results) => {
    if (err){
      //TODO - will this handle an empty body?
      res.sendStatus(500);
    } else {
      res.status(200).send(results)
    }
  })
});

//endpoint 2 - get review meta
app.get("/reviews/meta", (req, res) => {
  console.log("get review meta")

  // uhhhhhhhhhh idk how to get this.
  res.sendStatus(500);

  // db.getReviewMeta((err, results) => {
  //   if (err){
  //     res.sendStatus(500);
  //   } else {
  //     res.status(200).send(results)
  //   }
  // })
  
});

//post review
app.post("/reviews", (req, res) => {
  console.log("post review")
  // let params = [req.body.FILL_ME_IN, req.body.FILL_ME_IN]

  res.sendStatus(500);

  // db.FILL_ME_IN(params, (err, results) => {
  //   if (err){
  //     res.sendStatus(500);
  //   } else {
  //     res.sendStatus(201);
  //   }
  // })
})

  //increase helpfulness count
  app.put("/reviews/:review_id/helpful", (req, res) => {

    //simple update helpful = helpful +1 sql command

    console.log(review_id);
    res.sendStatus(500);

    //NOTE: currently need to impliment db AND axios call to use this correctly.
    // let params = req.body.categoryId;
    // db.FILL_ME_IN(params, (err, results) => {
    //   if (err){
    //     res.sendStatus(500);
    //   } else {
    //     res.sendStatus(201);
    //   }
    // })
  })

  app.put("/reviews/:review_id/report", (req, res) => {

    console.log(review_id);
    res.sendStatus(500);
    
    //NOTE: currently need to impliment db AND axios call to use this correctly.
    // let params = req.body.categoryId;
    // db.FILL_ME_IN(params, (err, results) => {
    //   if (err){
    //     res.sendStatus(500);
    //   } else {
    //     res.sendStatus(201);
    //   }
    // })
  })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
