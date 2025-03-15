import yup from "yup";

const signupSchema = yup.object({
  name: yup.string().min(3).max(100).required(),
  email: yup.string().email().required().lowercase(),
  password: yup.string().min(4).max(100).required(),
});
const SignupValidation = async (req, res, next) => {
  const validateData = await signupSchema.validate(req.body);

  req.body = validateData;

  if (!validateData) {
    return res.status(400).json("Bad request", error.message);
  }
  next();
};

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
const LoginValidation = async (req, res, next) => {
  const validateDate = await loginSchema.validate(req.body);
  req.body = validateDate;
  if (!validateDate) {
    return res.status(400).json("Bad request", error.message);
  }
  next();
};

export { SignupValidation, LoginValidation };
