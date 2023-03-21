import AppLayout from '@/components/AppLayout';
import Dashboard from '@/components/dashboard';
import Loader from '@/components/Loader';
import useGetPokemonList from '@/hooks/useGetPokemonList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
    // useRouter
    const { isLoading } = useGetPokemonList();

    const router = useRouter()

    // Verificar si el usuario está autenticado
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, []);

    return (
        <AppLayout>
            {isLoading ? (
                <Loader />
            ) : (
                <Dashboard />
            )}
        </AppLayout>
    )
}
