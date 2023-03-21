import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { POKEMONS_PER_PAGE } from '@/utils/constants';
import useGetPokemonList from '@/hooks/useGetPokemonList';

import { Container, ContainerCards, } from './styled';

const Dashboard = () => {
    const { pokemonList, getPokemonList } = useGetPokemonList();

    console.log('pokemonList', pokemonList)
    return (
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
    );
};

export default Dashboard;