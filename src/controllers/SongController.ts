import { Request, Response } from "express";
import { CreateSongService } from "../services/CreateSongService";
import { DeleteSongService } from "../services/DeleteSongService";
import { ListUserSongsService } from "../services/ListSongsService";

class SongController {
  async store(request: Request, response: Response) {
    const { name, user_id, album_id } = request.body;

    const createSongService = new CreateSongService();

    const song = await createSongService.execute({
      name,
      user_id,
      album_id,
    });

    return response.json(song);
  }

  async list(request: Request, response: Response) {
    const { id } = request.params;

    const listSongsService = new ListUserSongsService();

    const songs = await listSongsService.execute(id);

    return response.json(songs);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSongService = new DeleteSongService();

    await deleteSongService.execute(id);

    return response.json({ message: "exclusão bem sucedida" });
  }
}

export { SongController };
