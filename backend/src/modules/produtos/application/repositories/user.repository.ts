import { User } from "../../dominio/entities/user.entities.js";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>
}