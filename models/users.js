import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /(http|https):\/\/(www\.)?[a-zA-Z0-9\W]{3,63}\.[a-z]{1,3}\/?([a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=])*/.test(
          v
        );
      },
      message: "Lo sentimos. Debes ingresar una url válida",
    },
  },
});

const User = mongoose.model("user", userSchema);
export default User;
