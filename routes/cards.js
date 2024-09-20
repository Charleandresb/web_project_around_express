import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", function (req, res) {
  fs.readFile("./data/cards.json", (err, data) => {
    const cards = JSON.parse(data);
    if (!cards) {
      console.log(err);
      return;
    }

    res.send(cards);
  });
});

export default router;
