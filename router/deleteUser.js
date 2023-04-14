const express = require('express');
const router = express.Router();
const db = require('../database/connection');


router.get('/', (req,res) =>{

    const sql = 'DELETE FROM UserForms where id=?';
    let id = req.query.id;

    db.query(sql,[id], (err, result) => {
      if (err) throw err;
      res.redirect('/employees/?page=');
    });

});








module.exports = router;