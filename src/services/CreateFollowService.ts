import { getCustomRepository } from "typeorm";
import { FollowersRepositories } from "../repositories/FollowersRepositories";

interface IFollowerRequest {
  user_follower: string;
  user_followed: string;
}

class CreateFollowerService {
  async execute({ user_follower, user_followed }: IFollowerRequest) {
    const followersRepositories = getCustomRepository(FollowersRepositories);

    if (user_followed == user_follower) {
      throw new Error("Você não pode seguir a si mesmo");
    }

    const follow = followersRepositories.create({
      user_follower,
      user_followed,
    });

    await followersRepositories.save(follow);

    return follow;
  }
}

export { CreateFollowerService };
