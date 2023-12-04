import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, createHash, createVerify } from 'crypto';

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
    const isPasswordValid = await this.verifyPassword(pass, user.hashPass);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    console.log('user retornado pelo findemail:', user);
    
    const payload = { sub: user.email };
    return {
      access_token: await this.jwtService.sign(payload, {
        secret: this.secretOrPrivateKey,
        expiresIn: '2h',
      }),
    };
  }

  async verifyPassword(plaintextPassword: string, hashedPassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Obter o salt do hash armazenado no banco de dados (se necessário)

      // Gerar o hash do plaintextPassword
      const hash = createHash('sha256');
      hash.update(plaintextPassword);

      // Obter o hash final em formato hexadecimal
      const hashedInputPassword = hash.digest('hex');
      
      // Comparar os hashes
      resolve(hashedInputPassword === hashedPassword);
    });
  }
}
