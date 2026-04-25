import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = () => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}",
  );
  return favorites;
};

const initialState: PokemonsState = { ...getInitialState() };

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
      } else {
        state[id] = action.payload;
      }
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
