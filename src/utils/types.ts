export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    image: string;
    moves: string[];
}

export interface PokemonListResponse {
    name: string;
    count: number;
    results: {
        name: string;
        url: string;
    }[];
}
