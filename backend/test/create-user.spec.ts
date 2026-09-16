import { UserRepository } from "../src/modules/produtos/application/repositories/user.repository.js"
import { CreateUserUseCase } from "../src/modules/produtos/application/use-case/create-user.use-case.js"
import { User } from "../src/modules/produtos/dominio/entities/user.entities.js"

class FakeUserRepository implements UserRepository {
    users: User[] = []

    async create(user: User): Promise<void> {
        this.users.push(user)
    }
}

describe("Criar usuario", ()=> {

    it("Deve criar usuario", async ()=>{

        const userRepository = new FakeUserRepository()

        const userCase = new CreateUserUseCase(userRepository)

        const user = await userCase.execute({
            name: "Thiago",
            email: "thiago@gmail.com",
            password: "123456",
            phone: "(87)9 8167-7979"
        })

        expect(user.name).toBe("Thiago")
        expect(user.email).toBe("thiago@gmail.com")

        expect(userRepository.users).toHaveLength(1)
        expect(userRepository.users[0].email).toBe("thiago@gmail.com")
    })
})