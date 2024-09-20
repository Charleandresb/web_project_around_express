import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", function (req, res) {
  fs.readFile("./data/users.json", (err, data) => {
    const users = JSON.parse(data);
    if (!users) {
      console.log(err);
      return;
    }

    res.send(users);
  });
});

router.get("/:id", function (req, res) {
  fs.readFile("./data/users.json", { encoding: "utf8" }, (err, data) => {
    const userId = JSON.parse(data);
    const user = userId.find((users) => users._id === req.params.id);
    if (!user) {
      console.log(err);
      res.status(404).send({ message: "Usuario no encontrado" });
      return;
    }

    res.send(user);
  });
});

export default router;
