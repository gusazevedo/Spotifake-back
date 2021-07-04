import { Request, Response } from "express";
import { ListUserFollowedByService } from "../services/ListUserFollowedByService";

class ListUserFollowedByController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserFollowersService = new ListUserFollowedByService();

    const followers = await listUserFollowersService.execute(user_id);

    return response.json(followers);
  }
}

export { ListUserFollowedByController };
