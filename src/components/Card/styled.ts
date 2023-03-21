import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
    ${tw`flex flex-col cursor-pointer transition ease-in-out hover:scale-105 w-48 md:w-56 lg:w-60 rounded-lg shadow`};
`;

export const ContainerImage = styled.div`
    ${tw`flex relative justify-center overflow-hidden bg-poke-wall bg-cover bg-no-repeat rounded-t-lg `};
`;

export const ImagePokemon = styled(Image)`
    ${tw`object-contain`};
`;

export const PillWeight = styled.span`
    ${tw`absolute bottom-1.5 right-1.5 inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800`}
`;

export const BodyCard = styled.div`
    ${tw`pt-3 bg-gray-800 border-gray-700`}
`;

export const NameCard = styled.h3`
    ${tw`mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white`}
`;

export const Tags = styled.p`
    ${tw`mb-3 font-normal text-gray-700 dark:text-gray-400`}
`;
