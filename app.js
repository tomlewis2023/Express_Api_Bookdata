const express = require("express");
const bookRouter = require("./routes/bookRoutes");

const port = 3000;

const app = express();

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log("server is running");
});
