import { Request, Response } from "express";
import { ListUserFollowingService } from "../services/ListUserFollowingService";

class ListUserFollowingController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserFollowingService = new ListUserFollowingService();

    const following = await listUserFollowingService.execute(user_id);

    return response.json(following);
  }
}

export { ListUserFollowingController };
