import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "../produtos/infra/database/typeorm/entities/user-schema.js";
import { CreateUserUseCase } from "../produtos/application/use-case/create-user.use-case.js";
import { UserRepository } from "../produtos/application/repositories/user.repository.js";
import { UserTypeOrmRepository } from "../produtos/infra/repositories/user-typeorm.repository.js";

@Module({

    imports:[
        TypeOrmModule.forFeature([UserSchema])
    ],
    controllers:[],

    providers:[
        CreateUserUseCase,
        {
            provide: UserRepository,
            useClass: UserTypeOrmRepository
        },
    ],
    exports:[
        UserRepository
    ]
})

export class UsersModule{}