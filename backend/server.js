const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const { Pool } = require('pg');
const user = process.env.PGUSER || 'connormackay';
const database = process.env.PGDATABASE || 'fibonacci_db';

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

const saveSequence = (sequence) => {
  pool.query('INSERT INTO sequences(num_one, num_two, num_three) VALUES (1, 1, 13);')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}
 


app.listen(port, () => {
  console.log(`backend api listening on port ${port}! woooh!`);
})