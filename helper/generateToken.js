import jwt from "jsonwebtoken";

export default function generateToken(user) {
  const token = jwt.sign(
    { userId: user._id, email: user.email, name: user.name },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  return token;
}
