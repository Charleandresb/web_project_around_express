export default (req, res, next) => {
  console.log("middleware auth", req.headers);

  next();
};
