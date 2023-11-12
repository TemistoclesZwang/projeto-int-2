import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../DTO/create-order.dto';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { OrderRepository } from '../repositories/order.repository';
export declare class OrderService {
    private readonly usersRepository;
    private readonly orderRepository;
    constructor(usersRepository: UserRepository, orderRepository: OrderRepository);
    create(createOrderDto: CreateOrderDto): Promise<void>;
    findByUserId(userId: string): Promise<Order[]>;
}
