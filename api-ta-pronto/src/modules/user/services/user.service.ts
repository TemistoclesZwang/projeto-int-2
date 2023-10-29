import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../DTO/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    const { name, email, hashSenha } = createUserDto;
    await this.usersRepository.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   return this.usersRepository.update(id, updateUserDto);
  // }

  async remove(id: string): Promise<void> {
    return this.usersRepository.remove(id);
  }
}
