import { MenuService } from '../services/menu.service';
import { MenuRepository } from '../repositories/menu.repository';
export declare class MenuController {
    private readonly menuService;
    private menuRepository;
    constructor(menuService: MenuService, menuRepository: MenuRepository);
    findByMenuId(menuId: string): Promise<any[]>;
    findAll(): Promise<any[]>;
}
