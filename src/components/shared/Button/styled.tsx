import tw from 'twin.macro'
import styled from "styled-components";

export const ButtonContainer = styled.button`
    ${tw`cursor-pointer my-3.5 py-3 px-4 bg-rose-500 box-border text-white font-semibold rounded-xl uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-600 duration-300`}
`;