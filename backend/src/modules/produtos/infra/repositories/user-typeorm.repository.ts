import { UserRepository } from "../../application/repositories/user.repository.js";
import { InjectRepository } from "@nestjs/typeorm";
import { UserSchema } from "../database/typeorm/entities/user-schema.js";
import { User } from "../../dominio/entities/user.entities.js";
import { Repository } from "typeorm";

export class UserTypeOrmRepository implements UserRepository{

    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<UserSchema>
    ){}

    async create(user: User): Promise<void> {
        const userData = this.repository.create({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone
        })

        await this.repository.save(userData)
    }
}