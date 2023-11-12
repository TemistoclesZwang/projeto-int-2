import { User } from '@prisma/client';
import { Menu } from 'src/modules/menu/entities/menu.entity';
export declare class Order {
    id?: string;
    user?: User;
    orderId: string;
    userId: string;
    menuId: string;
    menu?: Menu;
    dateHourOrder: string;
    orderStatus: string;
}
