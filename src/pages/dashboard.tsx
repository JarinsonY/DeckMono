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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { pokemonList, isLoading } = useGetPokemonList(
        POKEMONS_PER_PAGE,
        (currentPage - 1) * POKEMONS_PER_PAGE
    );

    useEffect(() => {
        if (pokemonList?.count) {
            setTotalPages(Math.ceil(pokemonList.count / POKEMONS_PER_PAGE));
        }
    }, [pokemonList]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

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
                    {pokemonList?.results?.map((pokemon: any) => (
                        console.log('pokemon', pokemon)
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default Dashboard;