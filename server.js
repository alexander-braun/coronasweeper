const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('API RUNNING'))

//Define Routes
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assets in production
if (process.env.NODE_ENV.trim() === "production") {
  console.log("PRODUCTION MODE");
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(PORT));
