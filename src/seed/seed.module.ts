import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],

  // importamos el modulo de pokemon para poder usarlo en el seed
  imports: [
    PokemonModule
  ]
})
export class SeedModule { }
