const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const db = require('../database/connection');

const resultPerPage = 10;

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM UserForms';
  const resultPerPage = 10;

  db.query(sql, (err, result) => {
    if (err) throw err;

    const numofResult = result.length;
    const numberOfPages = Math.ceil(numofResult / resultPerPage);

    let page = req.query.page ? Number(req.query.page) : 1;

    if (page > numberOfPages) {
      res.redirect('/employees/?page=' + encodeURIComponent(numberOfPages));
    } else if (page < 1) {
      res.redirect('/employees/?page=' + encodeURIComponent('1'));
    }

    const starting = (page - 1) * resultPerPage;
    const sql2 = `SELECT * FROM UserForms LIMIT ${starting}, ${resultPerPage}`;
    db.query(sql2, (err, result) => {
      if (err) throw err;

      let iterator = (page - 5) < 1 ? 1 : page - 5;
      let ending = (iterator + 9) <= numberOfPages ? (iterator + 9) : numberOfPages;

      res.render('viewDocs', {
        data: result,
        page: page,
        iterator: iterator,
        ending: ending,
        numberOfPages: numberOfPages
      });

    });
  });
});




// router.get('/page/:page', async (req, res) => {

//   const page = parseInt(req.params.page);
//   const limit = 10;
//   const offset = (page - 1) * limit;

//   const sql = `SELECT * FROM employees LIMIT ${limit} OFFSET ${offset}`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     const employees = result;
//     res.render('employees', { employees, page });
//   });

//   const list = await employeeForm.findAll();
//   res.json(list);

//   console.log("IN");



// });



module.exports = router;