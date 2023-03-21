export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    age: number;
    token: string;
}

export type DataLogin = {
    email: string;
    password: string;
};

export interface PokemonListResponse {
    name: string;
    count: number;
    results: {
        name: string;
        url: string;
    }[];
}
