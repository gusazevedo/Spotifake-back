import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.hendle);

export { router };
