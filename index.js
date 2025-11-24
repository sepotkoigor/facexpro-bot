const express = require("express");
const app = express();

app.use(express.json());

// ✅ приймає постбек від Propeller
app.post("/postback", (req, res) => {
  console.log("NEW POSTBACK:", req.body);
  res.sendStatus(200);
});

// ✅ редірект людей прямо в канал
app.get("/", (req, res) => {
  res.redirect("https://t.me/FaceXpro");
});

// ✅ запуск на Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
