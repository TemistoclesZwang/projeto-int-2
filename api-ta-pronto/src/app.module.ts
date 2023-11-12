import { Module } from '@nestjs/common';
import { UserRepository } from './modules/user/repositories/user.repository';
import { UsersService } from './modules/user/services/user.service';
import { UsersController } from './modules/user/controllers/user.controller';
import { PrismaService } from 'src/prisma.service';
// import { AuthModule } from './modules/auth/auth/auth.module';
// import { AuthController } from './modules/authOld/auth.controller';
// import { AuthService } from './modules/authOld/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { OrderModule } from './modules/order/order.module';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
// import {PrismaUse}

@Module({
  imports: [
    OrderModule,
  //   JwtModule.register({
  //     secret: 'SuaChaveSecretaAqui',
  //     signOptions: { expiresIn: '1d' },
  //   }),
  ],
  controllers: [UsersController,AuthController],
  providers: [
    UsersService,
    JwtService,
    AuthService,
    PrismaService,
    UserRepository
    // PrismaUsers, // Adicione esta linha para incluir PrismaUsers nos provedores
  ],
})
export class AppModule {}
