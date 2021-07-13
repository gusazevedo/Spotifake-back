import { getCustomRepository } from "typeorm";
import { AlbumsRepositories } from "../repositories/AlbumsRepositories";

class ListAlbumsService {
  async execute(user_id) {
    const albumsRepositories = getCustomRepository(AlbumsRepositories);

    const albumns = await albumsRepositories.find({
      user_id,
    });

    return albumns;
  }
}

export { ListAlbumsService };
