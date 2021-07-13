import { EntityRepository, Repository } from "typeorm";
import { Song } from "../entities/Song";

@EntityRepository(Song)
class SongsRepositories extends Repository<Song> {}

export { SongsRepositories };
