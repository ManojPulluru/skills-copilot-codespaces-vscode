// Create web server
// Create a new web server using the express module.
const express = require('express');
const app = express();

// Use the express.urlencoded middleware to parse the body of incoming requests as JSON.
app.use(express.urlencoded({ extended: true }));

// Create an array to store the comments.
const comments = [];

// Create a route that listens for POST requests to the /comments path.
app.post('/comments', (req, res) => {
  // Store the comment in the comments array.
  comments.push(req.body.comment);
  // Send a response with the comment that was added.
  res.send(req.body.comment);
});

// Create a route that listens for GET requests to the /comments path.
app.get('/comments', (req, res) => {
  // Send a response with the comments array.
  res.send(comments);
});

// Start the server on port 4001.
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});