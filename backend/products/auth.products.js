import jwt from "jsonwebtoken"
const ensureAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).send({ message: "Unauthorized,  JWT token" });
  }
  try {
    const secretKey = '12345';
    const decoded = jwt.verify(auth, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(403)
      .send({ message: "Unauthorized ;  JWT token, wrong or expired " });
  }
};

export { ensureAuth };
