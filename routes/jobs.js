const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Job = require("../models/Job");

router.get('/test', (req, res) => {
    res.send('deu certo!')
})

//add job via post
router.post("/add", (req, res) => {
  let { title, salalry, company, description, email, new_job } = req.body;

  //insert
  Job.creat({
    title,
    desciption,
    salary,
    company,
    email,
    new_job,
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router