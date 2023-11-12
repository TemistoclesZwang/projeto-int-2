import { Order } from '../entities/order.entity';
import { PrismaService } from 'src/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
export declare class OrderRepository {
    private readonly prisma;
    private readonly usersRepository;
    constructor(prisma: PrismaService, usersRepository: UserRepository);
    create(order: Order): Promise<void>;
    findByUserId(userId: string): Promise<Order[]>;
}
