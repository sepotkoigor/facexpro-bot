const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// ✅ Тестовий GET — перевірка що сервер живий
app.get("/", (req, res) => {
  res.send("Facexpro bot is running ✅");
});

// ✅ Твій постбек
app.post("/postback", async (req, res) => {
  console.log("NEW POSTBACK:", req.body);
  res.sendStatus(200);
});

// ✅ Railway підставляє PORT автоматично
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

