import tw from "twin.macro";
import styled from "styled-components";

export const Main = styled.main`
    ${tw`h-full min-h-screen flex flex-col pt-14 px-8 items-center justify-center`}
`;

export const ContainerLayout = styled.div`
    ${tw`h-max min-h-screen bg-gradient-to-r from-zinc-900 to-cyan-900`}
`;
