const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

app.listen(5000, () =>{
    console.log("server started on port 5000");
});

//create a feedback

app.post("/feedback", async (req, res) => {
    try {
         const { rating1 } = req.body;
         const { rating2 } = req.body;
         const { rating3 } = req.body;
        const { comment } = req.body;
    const newFeedback = await pool.query(
      "INSERT INTO feedback ( rating1, rating2, rating3, comment) VALUES($1,$2,$3,$4) RETURNING *",
      [rating1, rating2, rating3, comment],
      
    );

    res.json(newFeedback.rows[0]);
        


    } catch (err) {
      console.error(err.message);
    }
  });