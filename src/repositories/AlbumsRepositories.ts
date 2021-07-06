import { EntityRepository, Repository } from "typeorm";
import { Album } from "../entities/Album";

@EntityRepository(Album)
class AlbumsRepositories extends Repository<Album> {}

export { AlbumsRepositories };
