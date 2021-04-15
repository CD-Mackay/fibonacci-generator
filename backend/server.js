const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const { Pool } = require('pg');
const user = process.env.PGUSER || 'connormackay';
const database = process.env.PGDATABASE || 'fibonacci_db';
const index = require('./index');
app.use(express.urlencoded());  
app.use(express.json());

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
  const sequence = req.body;
 // index.saveSequence(req.body)
  const { num_one, num_two, num_three} = sequence;
  pool.query('INSERT INTO sequences (num_one, num_two, num_three) VALUES ($1, $2, $3)', [num_one, num_two, num_three])
  .then(response => {
    res.status(200).send(response);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.delete('/sequences/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM sequences WHERE id = $1', [id])
  .then(response => {
    res.status(200).send(response);
  })
  .catch(err => {
    res.status(500).send(err);
  })
})



app.listen(port, () => {
  console.log('3');
  console.log('2');
  console.log('1');
  console.log(`backend api listening on port ${port}! woooh!`);
})