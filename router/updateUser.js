const express = require('express');
const router = express.Router();
const db = require('../database/connection');

router.get('/', (req,res) =>{

    const sql = 'SELECT * FROM UserForms where id=?';
    let id = req.query.id;

    db.query(sql , [id], (err, result) => {
      if (err) throw err;
      const iframeUrl = `https://www.formpl.us/form/4509183562088448?id=${id}`;
      res.render('form2', {iframeUrl: iframeUrl, employee:result});

    });

});



module.exports = router;