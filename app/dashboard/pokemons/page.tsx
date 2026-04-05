import Image from "next/image";
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons/interfaces";

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
  return pokemons;
};

export const PokemonPage = async () => {
  const pokemons = await getPokemons(151, 0);
  return (
    <>
      <h1>PokemonPage</h1>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 items-center justify-center w-full">
          {pokemons.map((pokemon) => (
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
