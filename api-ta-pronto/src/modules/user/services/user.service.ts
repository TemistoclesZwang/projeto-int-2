import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { v4 as uuid } from 'uuid';
// import bcrypt from "bcrypt";

function generateId():string{
  return uuid()
}
const bcrypt = require('bcrypt');
const myPlaintextPassword = '123';

function generateHash(plaintextPassword: string): Promise<string> {
  return new Promise((resolve, reject) => {
      bcrypt.hash(plaintextPassword, 2, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });

  });
}


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    generateHash(myPlaintextPassword)
    .then((hash) => {
      const id = generateId();
      const user = {
        ...createUserDto,
        id,
        hashPass: hash, 
      };

      return this.usersRepository.create(user);
    })
    .catch((error) => {
      console.error('Erro ao gerar o hash:', error);
    });


  }

  async update(updateUserDto:UpdateUserDto): Promise<User> {
    try {
      const user = await this.usersRepository.findEmail(updateUserDto.email);

      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }

      const updatedUser = await this.usersRepository.update(updateUserDto.email, updateUserDto.name);
      return updatedUser;

    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new InternalServerErrorException('Erro ao atualizar usuário');
    }
  }

  async remove(email: string): Promise<void> {
    return this.usersRepository.remove(email);
  }
  
  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findEmail(email: string): Promise<User> {
    return this.usersRepository.findEmail(email);
  }

}




