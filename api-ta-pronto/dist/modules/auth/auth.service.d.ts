import { UsersService } from '../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    private readonly secretOrPrivateKey;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<any>;
}
