import { Order } from '../entities/order.entity';
import { PrismaService } from 'src/prisma.service';
export declare class OrderRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(order: Order): Promise<void>;
}
