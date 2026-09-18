
import { User } from "../src/modules/produtos/dominio/entities/user.entities.js" 

describe('User', () => {

  it('deve criar um usuário válido', () => {
    const user = User.create({
      name: 'Thiago',
      email: 'thiago@email.com',
      password: '123456',
      phone: '87999999999',
    })

    expect(user.name).toBe('Thiago')
    expect(user.email).toBe('thiago@email.com')
  })

  it('deve impedir usuário sem nome', () => {
    expect(() =>
      User.create({
        name: '   ',
        email: 'thiago@email.com',
        password: '123456',
        phone: '87999999999',
      }),
    ).toThrow('O nome é obrigatorio')
  })

  it('deve impedir usuário sem email', () => {
    expect(() =>
      User.create({
        name: 'Thiago',
        email: '   ',
        password: '123456',
        phone: '87999999999',
      }),
    ).toThrow('O email é obrigatorio')
  })
})