import express from "express";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
