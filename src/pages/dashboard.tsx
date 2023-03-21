import tw from 'twin.macro'
import styled from 'styled-components';

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

const Main = styled.main`
  ${tw`h-full flex flex-col pt-14 px-8 items-center justify-center`}
`;

const Title = styled.h1`
  ${tw`text-2xl font-bold mb-4`}
`;

const Container = styled.div`
    ${tw`flex flex-col items-center justify-center flex-1 px-20 text-center`}
`;

const ContainerCards = styled.div`
    ${tw`grid xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8`}
`;

const ContainerCards2 = styled.div`
    ${tw`flex flex-wrap items-center justify-center py-10 `}
`;

const Dashboard = () => {
    const { pokemonList, getPokemonList, isLoading } = useGetPokemonList();

    console.log('pokemonList', pokemonList)

    return (
        <div className='h-screen bg-gradient-to-r from-zinc-900 to-cyan-900'>
            <Navbar />
            <Main>
                {/* <Title>Dashboard</Title> */}
                {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                ) : (
                    <>
                        <Container>
                            <ContainerCards>
                                {pokemonList?.list.map((pokemon: any) => (
                                    <Card key={pokemon.name} pokemon={pokemon} />
                                ))}
                            </ContainerCards>
                        </Container>
                        <Pagination
                            page={(Number(pokemonList?.offset) / POKEMONS_PER_PAGE) + 1}
                            nextPage={pokemonList?.next}
                            prevPage={pokemonList?.prev}
                            onPageChange={getPokemonList}
                        />
                    </>
                )}
            </Main>
        </div>
    );
};

export default Dashboard;