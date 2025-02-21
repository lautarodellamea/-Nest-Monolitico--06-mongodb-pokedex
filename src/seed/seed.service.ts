import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';


@Injectable()
export class SeedService {



  private readonly axios: AxiosInstance = axios;

  constructor(

    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>

  ) { }




  async executeSeed() {

    await this.pokemonModel.deleteMany({})

    const { data } = await this.axios.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=10")

    const insertPromisesArray: Promise<Pokemon>[] = [];

    data.results.forEach(({ name, url }) => {
      // console.log(name, url);
      const segments = url.split("/");
      // console.log(segments)
      const no: number = +segments[segments.length - 2];
      // const pokemon = await this.pokemonModel.create({ name, no });
      insertPromisesArray.push(this.pokemonModel.create({ name, no }));
    });


    // insertamos en la base de datos todas las promesas de manera paralela
    // esto es mas rapido que hacerlo de manera secuencial
    await Promise.all(insertPromisesArray);

    return "Seed executed";
  }
}
