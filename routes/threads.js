const express = require('express');
const brouter = express.Router();
const pgp = require('pg-promise')();

const db = pgp('postgres://postgres:postgres@localhost/rebbit');

brouter.get('/threads', (req, res, next) => {
  console.log('Hú!');
  res.render('thread', { title: 'req.params.threadID' });
  // db.any('select * from comments where thread = threadID')
  //   .then((data) => {
  //     console.log('data', data);
  //     res.render('thread', { title: 'Rebbit þræðir', data });
  //   })
  //   .catch((error) => {
  //     console.log('error', error);
  //     res.render('error', { title: 'Error', 
  //       message: 'Eitthvað fór úrskeiðis!', error });
  //   })
});

module.exports = brouter;