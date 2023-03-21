import { User } from '@/utils/types';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({
    user: null,
    login: async (email: string, password: string) => { },
    logout: () => { },
});

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const router = useRouter();

    async function login(email: string, password: string) {

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok || response.status === 200) {
            const data = await response.json();
            const user = { id: data.id, name: data.name, username: data.username, email: data.email, phone: data.phone, age: data.age, token: data.token };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user.token));
            router.push("/");
        } else {
            throw new Error('Invalid email or password');
        }
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.clear();
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };
