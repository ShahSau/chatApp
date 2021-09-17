const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello wordl!!");
});
app.use("/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app started on port ${PORT}`));
