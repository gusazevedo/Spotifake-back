import { Request, Response } from "express";
import { CreateAlbumService } from "../services/CreateAlbumService";
import { DeleteAlbumService } from "../services/DeleteAlbumsService";
import { ListAlbumsService } from "../services/ListAlbumsService";

class AlbumController {
  async store(request: Request, response: Response) {
    const { name, user_id, cover } = request.body;

    console.log(name, user_id, cover);

    const createAlbumService = new CreateAlbumService();

    const album = await createAlbumService.execute({
      name,
      user_id,
      cover,
    });

    return response.json(album);
  }

  async list(request: Request, response: Response) {
    const { id } = request.params;

    const listAlbumsService = new ListAlbumsService();

    const albums = await listAlbumsService.execute(id);

    return response.json(albums);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id);

    const deleteAlbumsService = new DeleteAlbumService();

    await deleteAlbumsService.execute(id);

    return response.json({ message: "exclusão bem sucedida" });
  }
}

export { AlbumController };
