import { useEffect, useState } from 'react';
import { PokemonListResponse } from '../utils/types';
import { API_URL } from '../utils/constants';

const OFFSET_DEFAULT = 0;
const LIMIT_DEFAULT = 10;
const URL_API = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET_DEFAULT}&limit=${LIMIT_DEFAULT}`;
const LIMIT_POKEMON_GENERATION = 151;

const useGetPokemonList = () => {
    const [pokemonList, setPokemonList] = useState<PokemonListResponse | null | any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPokemonList = async (url: string) => {
        setIsLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            /* let pokemonPromises = data.results.map(async (pokemon: any) => {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                return data;
            }); */
            let pokemonPromises = data.results.map((pokemon: { url: RequestInfo | URL; }) => fetch(pokemon.url));
            let newOffset = (new URL(url)).searchParams.get('offset');

            Promise.all(pokemonPromises).then((values => {
                let valuesPromises = values.map((response) => response.json());
                Promise.all(valuesPromises).then((values) => {
                    setPokemonList({
                        list: values.filter(pokemon => pokemon.id <= LIMIT_POKEMON_GENERATION),
                        prev: data.previous,
                        next: data.next,
                        offset: newOffset
                    });
                    setIsLoading(false);
                });
            }));
        } catch (error) {
            console.log(`Error on fetching ${url} \n Complete message error: ${error}`);
        }
    };

    useEffect(() => {
        getPokemonList(URL_API);
    }, []);

    return { pokemonList, getPokemonList, isLoading };
};

export default useGetPokemonList;
