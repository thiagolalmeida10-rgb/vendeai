import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserSchema {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string
}