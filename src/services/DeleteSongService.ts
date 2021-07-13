import { getCustomRepository } from "typeorm";
import { SongsRepositories } from "../repositories/SongsRepositories";

class DeleteSongService {
  async execute(song_id) {
    const songsRepositories = getCustomRepository(SongsRepositories);

    const songs = await songsRepositories.delete({ id: song_id });

    return songs;
  }
}

export { DeleteSongService };
