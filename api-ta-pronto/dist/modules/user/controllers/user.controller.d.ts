import { UsersService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../DTO/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    private userRepository;
    constructor(usersService: UsersService, userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<void>;
}
