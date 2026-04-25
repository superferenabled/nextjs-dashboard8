import { FavoritePokemons } from "@/app/components";

export const FavoritesPage = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemones Favoritos
        <small className="text-blue-500"> Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
};



export default FavoritesPage;
