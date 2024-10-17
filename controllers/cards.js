import Card from "../models/cards.js";

export async function getCards(req, res) {
  await Card.find({})
    .orFail(() => {
      const error = new Error("No se ha encontrado la lista de cartas");
      error.statusCode = 404;
      throw error;
    })
    .then((cards) => {
      res.send(cards);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.statusCode).send({ message: error.message });
    });
}

export async function createCard(req, res) {
  const { name, link } = req.body;

  await Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((newCard) => {
      res.send(newCard);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .send({ message: "No se ha creado la carta por datos inválidos" });
    });
}

export async function deleteCardById(req, res) {
  await Card.findByIdAndRemove(req.params.id)
    .orFail(() => {
      const error = new Error("No se ha encontrado ninguna carta con esa id");
      error.statusCode = 404;
      throw error;
    })
    .then((deletedCard) => {
      res.send(deletedCard);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.statusCode).send({ message: error.message });
    });
}

export async function likeCard(req, res) {
  await Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("No se ha encontrado ninguna carta con esa id");
      error.statusCode = 404;
      throw error;
    })
    .then((likedCard) => {
      res.send(likedCard);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.statusCode).send({ message: error.message });
    });
}

export async function dislikeCard(req, res) {
  await Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("No se ha encontrado ninguna carta con esa id");
      error.statusCode = 404;
      throw error;
    })
    .then((dislikedCard) => {
      res.send(dislikedCard);
    })
    .catch((error) => {
      console.log(error);
      res.status(error.statusCode).send({ message: error.message });
    });
}
