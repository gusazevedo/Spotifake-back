import { Request, Response } from "express";
import { CreateAlbumService } from "../services/CreateAlbumService";

class CreateAlbumController {
  async handle(request: Request, response: Response) {
    const { name, user_id, publication_date } = request.body;

    const createAlbumService = new CreateAlbumService();

    const album = await createAlbumService.execute({
      name,
      user_id,
      publication_date,
    });

    return response.json(album);
  }
}

export { CreateAlbumController };
