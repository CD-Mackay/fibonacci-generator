const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const { Pool } = require('pg');
const user = process.env.PGUSER || 'connormackay';
const database = process.env.PGDATABASE || 'fibonacci_db';
const index = require('./index');

const pool = new Pool ({
  host: 'localhost',
  user: user,
  database: database
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) { 
      return console.error('error executing query', err.stack)
    }
    console.log(result.rows);
  })
});


app.get('/sequences', (req, res) => {
  pool.query('SELECT * FROM sequences')
  .then(data => {
    res.json(data.rows);
  });
})

app.post('/sequences', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req);

  index.saveSequence(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});



app.listen(port, () => {
  console.log('3');
  console.log('2');
  console.log('1');
  console.log(`backend api listening on port ${port}! woooh!`);
})