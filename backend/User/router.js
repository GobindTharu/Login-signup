import express from "express";
import { Login, Signup } from "./controller.js";
import { LoginValidation, SignupValidation } from "./middleware.js";
import { ensureAuth } from "../products/auth.products.js";
import { Products } from "../products/products.js";

const router = express.Router();

router.post("/auth/signup/", SignupValidation, Signup);
router.post("/auth/login/", LoginValidation, Login);
router.get("/products/", ensureAuth, Products);

export { router as userController };
