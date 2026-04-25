"use client";

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = !!useAppSelector((state) => state.pokemons[id]);
  const dispatch = useAppDispatch();
  console.log(isFavorite);
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="capitalize pt-2 text-lg font-semibold text-gray-50">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <button
                role="button"
                className="cursor-pointer"
                onClick={() => {
                  dispatch(toggleFavorite(pokemon));
                }}
              >
                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
              </button>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? 'Favorito' : 'No Favorito'}
              </p>
              <p className="text-xs text-gray-500">Ver en campaña</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
