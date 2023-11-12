import { User } from '@prisma/client';
export declare class Order {
    id: string;
    user: User;
    orderId: string;
    dateHourOrder: string;
    orderStatus: string;
}
