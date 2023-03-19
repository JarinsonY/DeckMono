import { createContext, useContext, useState } from 'react';

interface User {
    username: string;
    email: string;
}

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

    async function login(email: string, password: string) {
        // Aquí iría la lógica de autenticación, por ejemplo:
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            const user = { username: data.username, email: data.email };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            throw new Error('Invalid email or password');
        }
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };
