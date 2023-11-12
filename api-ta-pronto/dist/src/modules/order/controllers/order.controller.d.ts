import { CreateOrderDto } from '../DTO/create-order.dto';
import { OrderService } from '../services/order.service';
import { OrderRepository } from '../repositories/order.repository';
export declare class OrderController {
    private readonly orderService;
    private orderRepository;
    constructor(orderService: OrderService, orderRepository: OrderRepository);
    create(createOrderDto: CreateOrderDto): Promise<void>;
}
