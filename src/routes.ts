import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateFollowerController } from "./controllers/CreateFollowerController";
import { SongController } from "./controllers/SongController";
import { AlbumController } from "./controllers/AlbumController";
import { ListUserFollowedByController } from "./controllers/ListUserFollowedByController";
import { ListUserFollowingController } from "./controllers/ListUserFollowingController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createFollowerController = new CreateFollowerController();
const songController = new SongController();
const albumController = new AlbumController();
const listUserFollowedByController = new ListUserFollowedByController();
const listUserFollowingController = new ListUserFollowingController();

router.post("/login", authenticateUserController.hendle);
router.post("/users", createUserController.handle);

router.post("/create/album", albumController.store);
router.get("/list/albums/:id", albumController.list);
router.delete("/delete/album/:id", albumController.delete);

router.post("/follow", createFollowerController.handle);
router.get("/user/followers", listUserFollowedByController.handle);
router.get("/user/following", listUserFollowingController.handle);

router.post("/upload/song", songController.store);
router.get("/list/songs/:id", songController.list);
router.delete("/delete/song/:id", songController.delete);

export { router };
