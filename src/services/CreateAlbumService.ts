import { getCustomRepository } from "typeorm";
import { AlbumsRepositories } from "../repositories/AlbumsRepositories";

interface IAlbumRequest {
  name: string;
  user_id: string;
  cover: string;
}

class CreateAlbumService {
  async execute({ name, user_id, cover }: IAlbumRequest) {
    const albumsRepositories = getCustomRepository(AlbumsRepositories);

    if (!name) {
      throw new Error("Preencha todos os campos");
    }

    const albumAlreadyExists = await albumsRepositories.findOne({
      name: name,
      user_id: user_id,
    });

    if (albumAlreadyExists) {
      throw new Error("Não é possível cadastrar álbuns com nomes iguais");
    }

    const album = albumsRepositories.create({
      name,
      user_id,
      cover,
    });

    await albumsRepositories.save(album);

    return album;
  }
}

export { CreateAlbumService };
