import { getCustomRepository } from "typeorm";
import { FollowersRepositories } from "../repositories/FollowersRepositories";

class ListUserFollowingService {
  async execute(user_id) {
    const followersReoositories = getCustomRepository(FollowersRepositories);

    const following = await followersReoositories.find({
      user_follower: user_id,
    });

    return following;
  }
}

export { ListUserFollowingService };
