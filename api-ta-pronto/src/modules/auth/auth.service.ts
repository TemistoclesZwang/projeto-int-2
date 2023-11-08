import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { UsersService } from '../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  private readonly secretOrPrivateKey: string;

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.secretOrPrivateKey = '123';
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findEmail(email);
    if (user?.email !== email) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await bcrypt.compare(pass, user.hashPass);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.email };
    return {
      access_token: await this.jwtService.sign(payload, {
        secret: this.secretOrPrivateKey,
        expiresIn:'2h',
      }),
    };
  }
}
