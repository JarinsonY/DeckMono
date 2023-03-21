import tw from "twin.macro";
import styled from "styled-components";

export const Header = styled.header`
    ${tw`fixed w-full h-16 flex items-center justify-between px-12 py-3`}
`;

export const Title = styled.h1`
    ${tw`cursor-pointer text-2xl font-bold text-white transition ease-in-out duration-150 hover:text-rose-500 hover:scale-110`}
`;

export const NavbarMenu = styled.div`
    ${tw`hidden md:flex items-center`}
`;
