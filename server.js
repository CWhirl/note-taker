const express = require('express');
const app = express();
const api = require("./routes/api-routes")
const html = require("./routes/html-routes")

const PORT = process.env.PORT || 3001;

//configures express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//adds the routes to the express app
app.use(api);
app.use(html);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));