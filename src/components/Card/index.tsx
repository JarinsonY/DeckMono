import { Pokemon } from "@/utils/types";
import Image from "next/image";

/* type Pokemon = {
    id: number;
    name: string;
    image: string;
    type: string;
    weight: number;
    moves: string[];
} */

const Card = ({ pokemon, onClick }: { pokemon: Pokemon, onClick: () => void }) => {
    return (
        <div className="card" onClick={onClick}>
            <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
            <h3>{pokemon.name}</h3>
        </div>
    );
};


export default Card;
