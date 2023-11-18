import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { MenuRepository } from '../repositories/menu.repository';
export declare class MenuService {
    private readonly usersRepository;
    private readonly menuRepository;
    constructor(usersRepository: UserRepository, menuRepository: MenuRepository);
    findByMenuId(menuId: string): Promise<any[]>;
    findAll(): Promise<any[]>;
}
