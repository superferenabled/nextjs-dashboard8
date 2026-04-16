import { PokemonGrid } from "@/app/pokemons";

export const FavoritesPage = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemones
        <small className="text-blue-500"> Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default FavoritesPage;
