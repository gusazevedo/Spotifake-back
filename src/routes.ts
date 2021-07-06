import { Request, Response, Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateFollowerController } from "./controllers/CreateFollowerController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateSongController } from "./controllers/CreateSongController";
import { CreateAlbumController } from "./controllers/CreateAlbumController";
import { ListUserFollowedByController } from "./controllers/ListUserFollowedByController";
import { ListUserFollowingController } from "./controllers/ListUserFollowingController";
import { ListAlbumsController } from "./controllers/ListAlbumsController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { songsUpdate } from "./config/multer";
import multer from "multer";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createFollowerController = new CreateFollowerController();
const createSongController = new CreateSongController();
const createAlbumController = new CreateAlbumController();
const listUserFollowedByController = new ListUserFollowedByController();
const listUserFollowingController = new ListUserFollowingController();
const listAlbumsController = new ListAlbumsController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.hendle);
router.post("/follow", ensureAuthenticated, createFollowerController.handle);
router.post("/album", ensureAuthenticated, createAlbumController.handle);
router.post(
  "/song/upload",
  multer(songsUpdate).single("file"),
  createSongController.handle
);
router.get("/user/albums", ensureAuthenticated, listAlbumsController.handle);
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
