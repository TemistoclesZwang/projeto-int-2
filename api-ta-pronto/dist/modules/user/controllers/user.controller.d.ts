import { UsersService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    private userRepository;
    constructor(usersService: UsersService, userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    update(updateUserDto: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    remove(email: string): Promise<void>;
}
