import express from "express";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";
import { notFoundRoute } from "./routes/utils.js";
import mongoose from "mongoose";

const { PORT = 3000 } = process.env;

const app = express();

mongoose
  .connect(
    "mongodb+srv://charlesb:50lD0mil%40@cluster0.t5jkb.mongodb.net/aroundb?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("conectado a la base de datos");
  })
  .catch((err) => {
    console.log("algo salió mal", err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "670d4c649f6be94c5d23179a", // Hardcoding id
  };

  next();
});

app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);
app.use("*", notFoundRoute); // * Ruta aleatoria

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
