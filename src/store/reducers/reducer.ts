import { createReducer, current } from "@reduxjs/toolkit";
import {
  SEARCH,
  SORT,
  SORT_REVERSE,
  UPDATE_LEFT_PANEL,
  UPDATE_RIGHT_PANEL,
  GET_ALL_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  GET_POKEMON_DETAILS_SUCCESS,
  GET_ALL_POKEMON_RESULTS,
} from "../actions";
import { ButtonsReducer, PokemonReducer } from "../../components";

const initialState: PokemonReducer = {
  allResults: [],
  results: [],
  filteredResults: [],
  searchInput: "",
  next: null,
  previous: null,
  count: null,
};

const details = {
  id: null,
  name: "",
  species: null,
  base_experience: null,
  height: null,
  is_default: null,
  order: null,
  weight: null,
  abilities: null,
  stats: null,
  held_items: null,
  sprites: null,
  types: [],
};

const buttonsState: ButtonsReducer = {
  rightPanelShow: false,
  leftPanelShow: false,
};

export const buttonsReducer = createReducer(buttonsState, {
  [UPDATE_RIGHT_PANEL]: (state, action) => ({
    ...state,
    rightPanelShow: action.payload,
  }),
  [UPDATE_LEFT_PANEL]: (state, action) => ({
    ...state,
    leftPanelShow: action.payload,
  }),
});

/* set pokemon name to store */
export const pokemonReducer = createReducer(initialState, {
  [GET_POKEMON_SUCCESS]: (state, { results, count, next, previous }) => {
    return {
      ...state,
      results,
      count,
      next,
      previous,
      filteredResults: results,
    };
  },
  [GET_ALL_POKEMON]: (state, { allResults }) => ({
    ...state,
    allResults,
  }),
  [GET_POKEMON_FAILURE]: (state, { error }) => ({
    ...state,
    error: error,
  }),
  [SEARCH]: (state, { searchInput }) => {
    return {
      ...state,
      searchInput,
      filteredResults: current(state).filteredResults.filter(result => {
        if (searchInput === "") {
          return true;
        } else if (result.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return true;
        }
        return false;
      }),
    };
  },
  [SORT]: state => ({
    ...state,
    filteredResults: current(state)
      .filteredResults.slice()
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
  }),
  [SORT_REVERSE]: state => ({
    ...state,
    filteredResults: current(state)
      .filteredResults.slice()
      .sort((a, b) => (a.name < b.name ? 1 : -1)),
  }),
  [GET_ALL_POKEMON_RESULTS]: state => ({
    ...state,
    filteredResults: current(state).allResults,
  }),
  [UPDATE_RIGHT_PANEL]: (state, action) => ({
    ...state,
    rightPanelShow: action.payload,
  }),
  [UPDATE_LEFT_PANEL]: (state, action) => ({
    ...state,
    leftPanelShow: action.payload,
  }),
});

export const pokemonDetailsReducer = createReducer(details, {
  [GET_POKEMON_DETAILS_SUCCESS]: (
    state,
    {
      id,
      name,
      species,
      base_experience,
      height,
      is_default,
      order,
      weight,
      abilities,
      stats,
      held_items,
      sprites,
      types,
    }
  ) => ({
    ...state,
    id,
    name,
    species,
    base_experience,
    height,
    is_default,
    order,
    weight,
    abilities,
    stats,
    held_items,
    sprites,
    types,
  }),
});