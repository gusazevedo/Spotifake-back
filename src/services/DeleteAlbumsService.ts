import { getCustomRepository } from "typeorm";
import { AlbumsRepositories } from "../repositories/AlbumsRepositories";

class DeleteAlbumService {
  async execute(album_id) {
    const albumRepositories = getCustomRepository(AlbumsRepositories);

    const album = await albumRepositories.delete({ id: album_id });

    return album;
  }
}

export { DeleteAlbumService };
