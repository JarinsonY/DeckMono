import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import Navbar from '@/components/Navbar';
import { POKEMONS_PER_PAGE } from '@/utils/constants';
import useGetPokemonList from '@/hooks/useGetPokemonList';
import { Pokemon, PokemonListResponse } from '@/utils/types';
import Loader from '@/components/Loader';
import { Container, ContainerCards, Main } from './styled';

const Dashboard = () => {
    const { pokemonList, getPokemonList, isLoading } = useGetPokemonList();

    console.log('pokemonList', pokemonList)

    return (
        <div className='h-screen bg-gradient-to-r from-zinc-900 to-cyan-900'>
            <Navbar />
            <Main>
                {isLoading ? (
                    <Loader />
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
                            total={pokemonList?.total}
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