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

const saveSequence = (sequence) => {
  return new Promise(function(resolve, reject) {
    const { numOne, numTwo, numThree } = sequence
    pool.query('INSERT INTO sequences(num_one, num_two, num_three) VALUES ($1, $2, $3);', 
    [numOne, numTwo, numThree], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new sequence has been added: ${results.rows[0]}`)
    })
  })
  
  
}

module.exports = {
  saveSequence
}