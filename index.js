const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/postback", async (req, res) => {
  console.log("NEW POSTBACK:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
