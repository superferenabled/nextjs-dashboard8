"use client";

import { PokemonGrid } from "@/app/pokemons";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50hv] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span>No hay favoritos</span>
    </div>
  );
};

export const FavoritePokemons = () => {
  const favorites = useAppSelector((state) => state.pokemons);
  const pokemons = Object.values(favorites);
  return (
    <>
      {pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}
    </>
  );
};

export default FavoritePokemons;
