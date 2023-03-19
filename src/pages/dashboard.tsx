import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import Navbar from '@/components/Navbar';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    weight: number;
    moves: string[];
}

const Dashboard = () => {
    const router = useRouter();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Verificar si el usuario está autenticado
   /*  useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]); */

    // Obtener la lista de pokemones
    useEffect(() => {
        const getPokemonList = async () => {
            const response = await fetch('/api/pokemon');
            const data = await response.json();
            setPokemonList(data.results);
            setTotalPages(Math.ceil(data.count / 10));
        };
        getPokemonList();
    }, [currentPage]);

    // Cambiar de página
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pokemonList.map((pokemon) => (
                        <Card key={pokemon.id} pokemon={pokemon} onClick={() => { }} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default Dashboard;
