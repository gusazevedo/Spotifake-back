import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateFollowerController } from "./controllers/CreateFollowerController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserFollowedByController } from "./controllers/ListUserFollowedByController";
import { ListUserFollowingController } from "./controllers/ListUserFollowingController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createFollowerController = new CreateFollowerController();
const listUserFollowedByController = new ListUserFollowedByController();
const listUserFollowingController = new ListUserFollowingController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.hendle);
router.post("/follow", ensureAuthenticated, createFollowerController.handle);

router.get(
  "/user/followers",
  ensureAuthenticated,
  listUserFollowedByController.handle
);
router.get(
  "/user/following",
  ensureAuthenticated,
  listUserFollowingController.handle
);

export { router };
