import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<void>;
    update(updateUserDto: UpdateUserDto): Promise<User>;
    remove(email: string): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findEmail(email: string): Promise<User>;
}
