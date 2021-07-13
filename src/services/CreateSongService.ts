import { getCustomRepository } from "typeorm";
import { SongsRepositories } from "../repositories/SongsRepositories";

interface ISongRequest {
  name: string;
  user_id: string;
  album_id: string;
}

class CreateSongService {
  async execute({ name, user_id, album_id }: ISongRequest) {
    const songsRepositories = getCustomRepository(SongsRepositories);

    if (!name || !user_id || !album_id) {
      throw new Error("Forneça todos os dados");
    }

    const song = await songsRepositories.create({
      name,
      user_id,
      album_id,
    });

    await songsRepositories.save(song);

    return song;
  }
}

export { CreateSongService };
