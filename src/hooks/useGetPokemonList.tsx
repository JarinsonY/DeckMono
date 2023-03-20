import { useEffect, useState } from 'react';
import { PokemonListResponse } from '../utils/types';
import { API_URL } from '../utils/constants';

const useGetPokemonList = (limit: number, offset: number) => {
    const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPokemonList = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(
                    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
                );
                const data = await response.json();
                setPokemonList(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        getPokemonList();
    }, [limit, offset]);

    return { pokemonList, isLoading };
};

export default useGetPokemonList;
