const express = require('express');
const app = express();
const apiRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));