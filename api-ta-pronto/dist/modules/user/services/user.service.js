"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
const uuid_1 = require("uuid");
function generateId() {
    return (0, uuid_1.v4)();
}
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '123';
const someOtherPlaintextPassword = 'not_bacon';
function generateHash() {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            console.log(hash);
        });
    });
}
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        generateHash();
        const id = generateId();
        const hashPass = 'teste';
        const user = {
            ...createUserDto,
            id,
            hashPass
        };
        await this.usersRepository.create(user);
    }
    async findAll() {
        return this.usersRepository.findAll();
    }
    async findOne(id) {
        return this.usersRepository.findOne(id);
    }
    async remove(id) {
        return this.usersRepository.remove(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UsersService);
//# sourceMappingURL=user.service.js.map