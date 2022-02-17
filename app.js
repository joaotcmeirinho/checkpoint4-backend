const express = require("express");
const app = express();
const connection = require("./db-config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const assetsRoutes = require("./routes/assetsRoutes");
const royalFamilyRoutes = require("./routes/royalFamilyRoutes");
const userRoutes = require("./routes/userRoutes");
const visitsRoutes = require("./routes/visitsRoutes");
const emailRoutes = require("./routes/emailRoutes");
const authRoutes = require("./routes/authRoutes");
const port = process.env.PORT || 5005;
const { transporter } = require("./helpers/email");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "cookies"],
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/assets", assetsRoutes);
app.use("/api/family", royalFamilyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/visits", visitsRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/admin", authRoutes);

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

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
