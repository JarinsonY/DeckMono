import { Pokemon } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import { BodyCard, CardContainer, ContainerImage, ImagePokemon, Move, Moves, Name, PillWeight } from "./styled";

/* type Pokemon = {
    id: number;
    name: string;
    image: string;
    type: string;
    weight: number;
    moves: string[];
} */

const Card = ({ pokemon }: { pokemon: any }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <CardContainer className="cursor-pointer transition ease-in-out hover:scale-105" onClick={() => setOpen(true)}>
                <PillWeight>{pokemon.weight} kg</PillWeight>
                <ContainerImage>
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} />
                    {/* Pill of weight */}
                    {/* <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">
                        <span className="font-bold">{pokemon.weight}</span> kg
                    </div> */}
                </ContainerImage>
                <div className="pt-3 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
                    {pokemon.moves.slice(0, 2).map((move: any) => (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" key={move.move.name}>#{move.move.name}</p>
                    ))}
                </div>
            </CardContainer>

            <Modal
                open={open}
                setOpen={setOpen}
                details={{
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                    type: pokemon.types[0].type.name,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    moves: pokemon.moves.slice(0, 5),
                    abilities: pokemon.abilities,
                    types: pokemon.types,
                    stats: pokemon.stats
                }}
            />
        </>
    );
};


export default Card;
