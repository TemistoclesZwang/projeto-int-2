// import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import { UsersService } from '../users/users.service';
// import { UsersService } from 'src/modules/user/services/user.service';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService
//   ) {}

//   async signIn(username, pass) {
//     const user = await this.usersService.findOne(username);
//     if (user?.password !== pass) { //. se a senha + hash não voltar true
//       throw new UnauthorizedException();
//     }
//     const payload = { sub: user.userId, username: user.username };
//     return {
//       access_token: await this.jwtService.signAsync(payload),
//     };
//   }
// }