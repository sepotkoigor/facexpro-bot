const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// ✅ Тестовий GET — перевірка що сервер живий
app.get("/", (req, res) => {
  res.send("Facexpro bot is running ✅");
});

// ✅ ЄДИНИЙ правильний POSTBACK
app.post("/postback", async (req, res) => {
  console.log("NEW POSTBACK:", req.body);

  const status = req.body.status;
  const userId = req.body.uid;

  // ✅ тільки коли підписка підтверджена
  if (status === "subscribed") {
    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.ADMIN_ID,
          text: `✅ Новий підписник з Propeller!\nUser ID: ${userId}`
        }
      );
    } catch (err) {
      console.error("TG error:", err);
    }
  }

  res.sendStatus(200);
});

// ✅ Railway підставляє PORT автоматично
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
