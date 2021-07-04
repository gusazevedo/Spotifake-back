import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async hendle(request: Request, response: Response) {
    const { tag, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      tag,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
