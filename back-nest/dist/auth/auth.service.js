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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register({ username, password, rol, eliminado }) {
        const user = await this.userService.getUsername(username);
        if (user) {
            throw new common_1.HttpException('El usuario ya existe', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUserDto = {
            username,
            password: hashedPassword,
            rol,
            eliminado
        };
        return await this.userService.createUser(createUserDto);
    }
    async login({ username, password }) {
        const user = await this.userService.getUsername(username);
        if (!user) {
            return new common_1.HttpException('Usuario no Existente', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new common_1.HttpException('Contraseña Incorrecta', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const payload = { username: user.username, role: user.rol };
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            username: user.username,
            role: user.rol
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map