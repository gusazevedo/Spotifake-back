import { getCustomRepository } from "typeorm";
import { FollowersRepositories } from "../repositories/FollowersRepositories";

class ListUserFollowedByService {
  async execute(user_id) {
    const followersRepositories = getCustomRepository(FollowersRepositories);

    const followedBy = await followersRepositories.find({
      user_followed: user_id,
    });

    return followedBy;
  }
}

export { ListUserFollowedByService };
