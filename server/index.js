const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database-mysql");

//edit
const { getAllTransactions } = require("../database-mysql");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//?
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/reviews", (req, res) => {
  console.log("get transactions")

  res.status(200).send({});

  // db.getAllTransactions((err, results) => {
  //   if (err){
  //     res.sendStatus(500);
  //   } else {
  //     res.status(200).send(results)
  //   }
  // })
  
});

//step 2: 
app.get("/api/categories", (req, res) => {
  console.log("get Categories")

  db.getAllCategories((err, results)=>{
    if (err){
      res.sendStatus(500);
    } else {
      res.status(200).send(results)
    }
  })
  
});

app.post("/api/category", (req, res) => {
  console.log("post category")
  console.log(req.body.category)
  let params = [req.body.category, req.body.budget]

  db.postCategory(params, (err, results) =>{
    if (err){
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })

  //step 3:
  app.put("/api/transaction", (req, res) => {

    //NOTE: currently need to impliment db AND axios call to use this correctly.
    let params = req.body.categoryId;
    db.setTransactionCategory(params, (err, results) =>{
      if (err){
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  })

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
