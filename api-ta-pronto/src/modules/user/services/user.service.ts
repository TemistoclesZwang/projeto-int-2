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
const someOtherPlaintextPassword = 'not_bacon';

function generateHash(){
bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      
  });
});
}

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    generateHash()
    const id = generateId();
    const hashPass = 'teste'
    const user = {
      ...createUserDto,
      id,
      hashPass
    };

    await this.usersRepository.create(user);
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
