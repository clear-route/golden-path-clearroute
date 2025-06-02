// Import Express module
const express = require("express");
const path = require("path"); // Import path module for joining paths

// Create an Express application
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS)
// from the 'public' directory
// This will automatically serve 'public/index.html' for the '/' route.
app.use(express.static(path.join(__dirname, "public")));

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Access the app at http://localhost:${PORT}`);
});
