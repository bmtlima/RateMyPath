const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');
const app = express();

const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());

const dbConfig = {
  user: 'ratemypathuser',
  host: 'ratemypathdbinstance.cbdnqek3in09.us-east-1.rds.amazonaws.com',
  database: 'ratemypathdb',
  password: 'htapymetar',
  port: 5432, // PostgreSQL default port
  ssl: {
    rejectUnauthorized: false,
  }
};

const pool = new Pool(dbConfig);

// Create a 'users' table
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL
  );
`, (err, result) => {
  if (err) {
    console.error('Error creating the "users" table:', err);
  } else {
    console.log('The "users" table has been created.');
  }
});

// Create a 'tutorials' table
pool.query(`
  CREATE TABLE IF NOT EXISTS tutorials (
    title VARCHAR (100) PRIMARY KEY,
    description VARCHAR (50) UNIQUE NOT NULL
  );
`, (err, result) => {
  if (err) {
    console.error('Error creating the "users" table:', err);
  } else {
    console.log('The "tutorials" table has been created.');
  }
});

// Test the connection
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL:', result.rows[0].now);
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users'); // Use the correct table name here
    client.release(); // Release the client back to the pool
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/', (req, res) => {
  const { query, values } = req.body;

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Data insertion error' });
    } else {
      console.log('Data inserted successfully.');
      res.json(result.rows);
    }
  });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


