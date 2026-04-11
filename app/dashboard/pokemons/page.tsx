import Image from "next/image";
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

const getPokemons = async (
  limit: number,
  offset: number,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  // notFound();
  return pokemons;
};

export const PokemonPage = async () => {
  'use cache'
  // cacheTag('pokemons');
  cacheLife({
    stale: 10,
    revalidate: 15
  })

  // revalidateTag('pokemons', 'max')

  const pokemons = await getPokemons(151, 0);
  return (
      <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de pokemones<small> estatico</small></span>
        <PokemonGrid pokemons={pokemons} />
      </div>
  );
};

export default PokemonPage;
