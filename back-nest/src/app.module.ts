//Este archivo es la raiz del proyecto para realizar las importaciones de modulos, creacion de clases...
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ServiciosModule } from './servicios/servicios.module';
import { DisponibilidadHorariaModule } from './disponibilidad-horaria/disponibilidad-horaria.module';
import { NecesidadHorariaModule } from './necesidad-horaria/necesidad-horaria.module';
import { CategoriaEmpleadoModule } from './categoria-empleado/categoria-empleado.module';
import { CategoriaServicioModule } from './categoria-servicio/categoria-servicio.module';
import { FacturasModule } from './facturas/facturas.module';
import { ItemsFacturasModule } from './items-facturas/items-facturas.module';
import { OrdenTrabajoModule } from './orden-trabajo/orden-trabajo.module';
import { HorariosAsignadosModule } from './horarios-asignados/horarios-asignados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'',
      database: 'corsacorsql',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //Podemos leer cualquier archivo entity
      synchronize:false,
    }),
    UsersModule,
    AuthModule,
    EmpleadosModule,
    ServiciosModule,
    DisponibilidadHorariaModule,
    NecesidadHorariaModule,
    CategoriaEmpleadoModule,
    CategoriaServicioModule,
    FacturasModule,
    ItemsFacturasModule,
    OrdenTrabajoModule,
    HorariosAsignadosModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
