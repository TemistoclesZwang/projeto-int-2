import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
// import { OrderService } from './services/menu.service';
import { MenuController } from './controllers/menu.controller';
import { MenuRepository } from './repositories/menu.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { MenuService } from './services/menu.service';

// import {PrismaUse}

@Module({
  // imports: [
  //   JwtModule.register({
  //     secret: 'SuaChaveSecretaAqui',
  //     signOptions: { expiresIn: '1d' },
  //   }),
  // ],
  controllers: [MenuController],
  providers: [
    MenuService,
    JwtService,
    // AuthService,
    PrismaService,
    MenuRepository,
    UserRepository
    // PrismaUsers, // Adicione esta linha para incluir PrismaUsers nos provedores
  ],
})
export class MenuModule {}
