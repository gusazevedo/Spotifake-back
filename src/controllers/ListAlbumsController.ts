import { Request, Response } from "express";
import { ListAlbumsService } from "../services/ListAlbumsService";

class ListAlbumsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listAlbumsService = new ListAlbumsService();

    const albums = await listAlbumsService.execute(user_id);

    return response.json({ albums });
  }
}

export { ListAlbumsController };
