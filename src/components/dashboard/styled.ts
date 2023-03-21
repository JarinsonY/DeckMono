import tw from "twin.macro";
import styled from "styled-components";

export const Main = styled.main`
    ${tw`h-full flex flex-col pt-14 px-8 items-center justify-center`}
`;

export const Container = styled.div`
    ${tw`flex flex-col items-center justify-center flex-1 px-20 text-center`}
`;

export const ContainerCards = styled.div`
    ${tw`grid xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8`}
`;
