import { PrismaService } from 'src/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { Menu } from '../entities/menu.entity';
export declare class MenuRepository {
    private readonly prisma;
    private readonly usersRepository;
    constructor(prisma: PrismaService, usersRepository: UserRepository);
    findByMenuId(menuId: string): Promise<any>;
    findAll(): Promise<Menu[]>;
}
