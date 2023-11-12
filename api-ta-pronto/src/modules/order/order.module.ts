import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { OrderRepository } from './repositories/order.repository';
import { UserRepository } from '../user/repositories/user.repository';

// import {PrismaUse}

@Module({
  // imports: [
  //   JwtModule.register({
  //     secret: 'SuaChaveSecretaAqui',
  //     signOptions: { expiresIn: '1d' },
  //   }),
  // ],
  controllers: [OrderController],
  providers: [
    OrderService,
    JwtService,
    // AuthService,
    PrismaService,
    OrderRepository,
    UserRepository
    // PrismaUsers, // Adicione esta linha para incluir PrismaUsers nos provedores
  ],
})
export class OrderModule {}
