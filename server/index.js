// Import all needed dependancies here
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

// Bring in controller containing restful endpoint methods.
const mainControl = require(`${__dirname}/controllers/mainCtrl`);

// Set react app port to 3000 and server port to 3001. Make sure you set proxy in package.json.
const port = 3001;

// Create express app and set body-parser/cors middleware.
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Restful endpoints which will direct the code into your controller.
//  (3) Notice that the type matches (get) and the url also matches ("/api/favorites/quote"). The endpoint then specifies that       the handling of the request will be done with the method getQuote found within the server controller. Step 4 is located at       server/controllers/mainCtrl.js on line 17.
app.get("/api/favorites/quote", mainControl.getQuote);
app.get("/api/favorites", mainControl.getFavorites);
app.delete("/api/favorites/:quote", mainControl.deleteFavorite);
app.put("/api/favorites/:id", mainControl.updateTitle);
app.post("/api/favorites", mainControl.addFavorite);

// Finish the server with the listen method. Console.log short message with port.
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log("Listening on port: " + port);
});
