const express = require("express");
const app = express();
const connection = require("./db-config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const assetsRoutes = require("./routes/assetsRoutes");
const port = process.env.PORT || 5005;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/assets", assetsRoutes);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
