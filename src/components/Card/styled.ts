import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
    ${tw`flex w-48 md:w-56 lg:w-60 flex-col rounded-lg shadow`};
`;

export const ContainerImage = styled.div`
    ${tw`flex justify-center overflow-hidden bg-poke-wall bg-cover bg-no-repeat rounded-t-lg `};
`;

export const ImagePokemon = styled(Image)`
    ${tw`object-contain`};
`;

export const PillWeight = styled.span`
    ${tw`bottom-0 right-0 w-full h-7 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-2`}
`;

export const BodyCard = styled.div`
    ${tw`px-6 py-4`}
`;

export const Name = styled.h2`
    ${tw`font-bold text-xl mb-2`}
`;

export const Moves = styled.ul`
    ${tw`flex flex-wrap`}
`;

export const Move = styled.li`
    ${tw`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
`;
