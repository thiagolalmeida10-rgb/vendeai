export interface CreateUserData{
    name: string,
    email: string,
    password: string,
    phone: string
}

export class User {
    private constructor(
        private readonly data: CreateUserData
    ){}

    static create(data: CreateUserData): User {
    
    if(!data.name.trim()){
      throw new Error("O nome é obrigatorio")
    }

    if(!data.email.trim()){
      throw new Error("O email é obrigatorio")
    }

    if(!data.password.trim()){
      throw new Error("A senha é obrigatoria")
    }

    if(!data.phone.trim()){
      throw new Error("O telefone é obrigatorio")
    }
    return new User(data)
  }

  get name(): string{
    return this.data.name
  }

   get email(): string{
    return this.data.email
  }

   get password(): string{
    return this.data.password
  }

   get phone(): string{
    return this.data.phone
  }
}