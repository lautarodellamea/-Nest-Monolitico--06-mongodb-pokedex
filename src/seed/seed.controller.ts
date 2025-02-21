// Los controladores son los encargados de manejar las peticiones es decir escuchar las solicitudes y regresar respuestas, no deberian realizar casi nada de logica o logica de negocio para manipular los datos los encargados de esos son los servicios

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }



  @Get()
  excecuteSeed() {
    return this.seedService.executeSeed();
  }

}
