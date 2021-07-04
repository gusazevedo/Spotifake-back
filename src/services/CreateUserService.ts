import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  tag: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, tag, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!name || !email || !tag || !password) {
      throw new Error("Preencha todos os campos");
    }

    const userEmailAlreadyExist = await usersRepositories.findOne({
      email,
    });

    if (userEmailAlreadyExist) {
      throw new Error("Este endereço de email já está em uso");
    }

    const userTagAlreadyExist = await usersRepositories.findOne({
      tag,
    });

    if (userTagAlreadyExist) {
      throw new Error("Esta tag de usuário já está em uso");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({
      name,
      email,
      tag,
      password: passwordHash,
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
