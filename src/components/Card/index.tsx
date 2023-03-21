import { Pokemon } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import { BodyCard, CardContainer, ContainerImage, ImagePokemon, NameCard, PillWeight, Tags } from "./styled";
import bgPokemon from "../../assets/images/background.png";
import { capitalizeStr } from "@/utils/funtions";

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
            <CardContainer onClick={() => setOpen(true)}>
                <ContainerImage>
                    <ImagePokemon src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} style={{ background: `url(${bgPokemon})` }} />
                    <PillWeight>
                        {pokemon.weight} kg
                    </PillWeight>
                </ContainerImage>
                <BodyCard className="pt-3 px-4 bg-gray-800 border-gray-700 text-left">
                    <NameCard className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{capitalizeStr(pokemon.name)}</NameCard>
                    <Tags className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pokemon.moves.slice(0, 2).map((move: any, index: number) => (
                        <span key={move.move.name}>#{move.move.name}{index === 1 ? '' : ', '}</span>
                    ))}</Tags>
                </BodyCard>
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
