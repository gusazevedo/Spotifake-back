import { EntityRepository, Repository } from "typeorm";
import { Follower } from "../entities/Follower";

@EntityRepository(Follower)
class FollowersRepositories extends Repository<Follower> {}

export { FollowersRepositories };
