import { describe, it, expect, vi } from "vitest";

import { UserTypeOrmRepository } from "../src/modules/produtos/infra/repositories/user-typeorm.repository.js"; 

describe("UserTypeOrmRepository", () => {
  it("deve criar e salvar um usuário", async () => {
    const repository = {
      create: vi.fn().mockReturnValue({
        id: "1",
        name: "Thiago",
        email: "thiago@email.com",
      }),
      save: vi.fn(),
    };

    const userRepository = new UserTypeOrmRepository(
      repository as any,
    );

    const user = {
      name: "Thiago",
      email: "thiago@email.com",
      password: "123456",
      phone: "87999999999",
    } as any;

    await userRepository.create(user);

    expect(repository.create).toHaveBeenCalledWith({
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    });

    expect(repository.save).toHaveBeenCalled();
  });
});