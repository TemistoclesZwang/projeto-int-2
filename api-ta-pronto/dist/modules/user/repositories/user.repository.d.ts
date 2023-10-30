import { User } from '../entities/user.entity';
import { PrismaService } from 'src/prisma.service';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findEmail(email: string): Promise<User>;
    update(email: string, newName: string): Promise<User>;
    remove(email: string): Promise<void>;
}
