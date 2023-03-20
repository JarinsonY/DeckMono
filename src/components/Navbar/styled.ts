import tw from "twin.macro";
import styled from "styled-components";

export const Header = styled.header`
    ${tw`fixed w-full h-16 flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200`}
`;

export const Title = styled.h1`
    ${tw`text-2xl font-bold text-gray-900`}
`;

export const NavBarBrand = styled.a`
    ${tw`flex items-center`}
`;

export const NavbarMenu = styled.div`
    ${tw`hidden md:flex items-center`}
`;
