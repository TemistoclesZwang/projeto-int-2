import { UsersService } from 'src/modules/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(id: string, pass: string): Promise<{
        access_token: string;
    }>;
}
