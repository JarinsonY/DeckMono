import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import Navbar from '@/components/Navbar';
import { POKEMONS_PER_PAGE } from '@/utils/constants';
import useGetPokemonList from '@/hooks/useGetPokemonList';
import { Pokemon, PokemonListResponse } from '@/utils/types';

/* interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    weight: number;
    moves: string[];
} */

const Dashboard = () => {
    const { pokemonList, getPokemonList, isLoading } = useGetPokemonList();

    console.log('pokemonList', pokemonList)

    return (
        <div>
            <h1>Dashboard</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* {pokemonList?.results.map((pokemon: Pokemon) => (
                        <Card key={pokemon.name} pokemon={pokemon} onClick={() => { }} />
                    ))} */}
                    {pokemonList?.list.map((pokemon: any) => (
                        <p key={pokemon.name}>{pokemon.name}</p>
                    ))}
                    <Pagination
                        page={(Number(pokemonList?.offset) / POKEMONS_PER_PAGE) + 1}
                        nextPage={pokemonList?.next}
                        prevPage={pokemonList?.prev}
                        onPageChange={getPokemonList}
                    />
                </>
            )}
        </div>
    );
};

export default Dashboard;