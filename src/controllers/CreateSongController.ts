import { Request, Response } from "express";

class CreateSongController {
  async handle(request: Request, response: Response) {
    console.log(request.file);
  }
}

export { CreateSongController };
