"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const empleados_module_1 = require("./empleados/empleados.module");
const servicios_module_1 = require("./servicios/servicios.module");
const disponibilidad_horaria_module_1 = require("./disponibilidad-horaria/disponibilidad-horaria.module");
const necesidad_horaria_module_1 = require("./necesidad-horaria/necesidad-horaria.module");
const categoria_empleado_module_1 = require("./categoria-empleado/categoria-empleado.module");
const categoria_servicio_module_1 = require("./categoria-servicio/categoria-servicio.module");
const facturas_module_1 = require("./facturas/facturas.module");
const items_facturas_module_1 = require("./items-facturas/items-facturas.module");
const orden_trabajo_module_1 = require("./orden-trabajo/orden-trabajo.module");
const horarios_asignados_module_1 = require("./horarios-asignados/horarios-asignados.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'corsacorsql',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            empleados_module_1.EmpleadosModule,
            servicios_module_1.ServiciosModule,
            disponibilidad_horaria_module_1.DisponibilidadHorariaModule,
            necesidad_horaria_module_1.NecesidadHorariaModule,
            categoria_empleado_module_1.CategoriaEmpleadoModule,
            categoria_servicio_module_1.CategoriaServicioModule,
            facturas_module_1.FacturasModule,
            items_facturas_module_1.ItemsFacturasModule,
            orden_trabajo_module_1.OrdenTrabajoModule,
            horarios_asignados_module_1.HorariosAsignadosModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map