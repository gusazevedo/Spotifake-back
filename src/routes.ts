import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateFollowerController } from "./controllers/CreateFollowerController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createFollowerController = new CreateFollowerController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.hendle);
router.post("/follow", createFollowerController.handle);

export { router };
