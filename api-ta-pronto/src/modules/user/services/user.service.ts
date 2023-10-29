import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../DTO/create-user.dto';
import { v4 as uuid } from 'uuid';
import bcrypt from "bcrypt";

function generateId():string{
  return uuid()
}
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '123';

function generateHash(plaintextPassword: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(plaintextPassword, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
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
