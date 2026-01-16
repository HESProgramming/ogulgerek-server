const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ogulgerek AI Server is running 🌹");
});

app.post("/ask-ai", async (req, res) => {
  const { history, lastAnswer } = req.body;

  let reply = "";

  if (lastAnswer === "no") {
    reply = "Peki Ogulgerek… bir kahve içsek fikrin değişir mi? EVET mi HAYIR mı 🌹";
  } else {
    reply = "IKNA_OLDU Çok güzel Ogulgerek… bu gül sana açtı 🌹✨";
  }

  res.json({ message: reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
