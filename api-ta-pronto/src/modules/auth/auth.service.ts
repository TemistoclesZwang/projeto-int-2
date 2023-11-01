import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

const bcrypt = require('bcrypt');

// const saltRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
    
  async signIn(id: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    
    const isPasswordValid = await bcrypt.compare(pass, user.hashPass);
    // console.log('pass',pass);
    // console.log('hashPass',user.hashPass);
    console.log('Senha válida',isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválida');
    }

    // Cria o payload do token JWT
    // const payload = {
    //     sub: id,
    //     username: user.name,
    //   };
  
      // Cria as opções para o método signAsync()
      // const options = {
      //   secretOrPrivateKey: '123',
      // };
      // const payloadBuffer = Buffer.from(JSON.stringify(payload));
      // const payloadObject = JSON.parse(payloadBuffer.toString('utf8'));
      // const opBuffer = Buffer.from(JSON.stringify(options));
      // const opObject = JSON.parse(opBuffer.toString('utf8'));

      // Gera o token JWT
      // const accessToken = await this.jwtService.sign(payload);
  
      // return { access_token: accessToken };
      return { access_token: 'sucesso' };
    }
}
