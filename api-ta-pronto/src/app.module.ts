import { Module } from '@nestjs/common';
import { UserRepository } from './modules/user/repositories/user.repository';
import { UsersService } from './modules/user/services/user.service';
import { UsersController } from './modules/user/controllers/user.controller';
import { PrismaService } from 'src/prisma.service';
// import {PrismaUse}

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    UserRepository
    // PrismaUsers, // Adicione esta linha para incluir PrismaUsers nos provedores
  ],
})
export class AppModule {}
