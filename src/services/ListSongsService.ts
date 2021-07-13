import { getCustomRepository } from "typeorm";
import { SongsRepositories } from "../repositories/SongsRepositories";

class ListUserSongsService {
  async execute(user_id) {
    console.log(user_id);
    const songsRepositories = getCustomRepository(SongsRepositories);

    const userSongs = await songsRepositories.find({ user_id });

    return userSongs;
  }
}

export { ListUserSongsService };
