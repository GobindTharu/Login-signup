import UserTable from "./model.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signup = async(req, res) => {
  try {
    const newUser = req.body;

    const user = await UserTable.findOne({ email: newUser.email });
    if (user) {
      return res.status(409).send({ message: "User Already Exist" });
    }

    const plainPassword = newUser.password;
    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(plainPassword, saltRounds);

    newUser.password = hashPassword;

    await UserTable.create(newUser);
    return res.status(201).send({ message: "Register Successful", success: true });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const Login = async (req, res) => {
  const loginCredentials = req.body;
  const user = await UserTable.findOne({ email: loginCredentials.email });
  if (!user) {
    return res.status(409).send({ message: "Invalid Authorization" });
  }

  const plainPassword = loginCredentials.password;
  const hashPassword = user.password;

  const isPasswordMatch = await bcrypt.compare(plainPassword, hashPassword);

  if (!isPasswordMatch) {
    return res.status(409).send({ message: "Invalid Authorization" });
  }

  const payload = { email: user.email };
  const secretKey = "12345";
  const token = jwt.sign(payload, secretKey);

  user.password = undefined;
  return res
    .status(201)
    .send({ message: "Login Successful", accessToken: token, userList: user });
};

export { Login, Signup };
