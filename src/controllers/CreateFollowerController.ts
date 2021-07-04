import { Request, Response } from "express";
import { CreateFollowerService } from "../services/CreateFollowService";

class CreateFollowerController {
  async handle(request: Request, response: Response) {
    const { user_follower, user_followed } = request.body;

    const createFollowerService = new CreateFollowerService();

    const follow = await createFollowerService.execute({
      user_follower,
      user_followed,
    });

    return response.json(follow);
  }
}

export { CreateFollowerController };
