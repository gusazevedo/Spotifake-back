import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  tag: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ tag, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findOne({
      tag,
    });

    if (!user) {
      throw new Error("Nome de usuário ou senha inválidos");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Nome de usuário ou senha inválidos");
    }

    const token = sign(
      {
        email: user.email,
      },
      "4e8bfc8933d87c40e8802383200e9212",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
