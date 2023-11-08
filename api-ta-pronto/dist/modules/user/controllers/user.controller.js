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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const user_repository_1 = require("../repositories/user.repository");
const create_user_dto_1 = require("../DTO/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const update_user_dto_1 = require("../DTO/update-user.dto");
let UsersController = class UsersController {
    constructor(usersService, userRepository) {
        this.usersService = usersService;
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        await this.usersService.create(createUserDto);
    }
    update(updateUserDto) {
        return this.usersService.update(updateUserDto);
    }
    remove(email) {
        return this.usersService.remove(email);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('novo'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User criado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User não foi criado' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Requisição inválida' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um user pelo email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User atualizado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User não encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteAccount/:email'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove um user pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User removido com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User não encontrado' }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        user_repository_1.UserRepository])
], UsersController);
//# sourceMappingURL=user.controller.js.map