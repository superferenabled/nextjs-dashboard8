import { Pokemon } from "@/app/pokemons";
import { use } from "react";

interface Params {
  id: string
}

// interface SearchParams {
//   a?: string;
//   b?: string;
//   c?: string;
// }

interface RouteProps {
  params: Promise<Params>;
  // searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: RouteProps) => {
  const { id } = await params;
  const {id: pokeId, name} = await getPokemon(id);
  return {
    title: `#${pokeId} - ${name}`,
    description: `Página del pakimon ${name}`
  }
}

const getPokemon = async (
  id: string
) : Promise<Pokemon> => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    {cache: "force-cache"}
  ).then((res) => res.json());
  console.log(`Se cargó: ${pokemon.name}`);
  return pokemon;
};

// export const PokemonPage = ({ params, searchParams }: RouteProps) => {
export const PokemonPage = ({ params }: RouteProps) => {
  const { id } = use(params);
  // const { a, b, c } = use(searchParams);
  const pokemon = use(getPokemon(id));
  
  return (
    <>
      <div>Pokemon id: {id}, </div>
      <div>{pokemon.name}</div>
      {/* { a && <div>a: {a}</div> }
      { b && <div>b: {b}</div> }
      { c && <div>c: {c}</div> } */}
    </>
  );
};

export default PokemonPage;
