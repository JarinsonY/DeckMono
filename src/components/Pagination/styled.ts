import tw from "twin.macro";
import styled from "styled-components";

export const PaginationContainer = styled.ul`
    ${tw`pb-8 isolate inline-flex rounded-md shadow-sm`}
`;

export const PaginationButton = styled.li(
    ({ disabled, position }: { disabled?: boolean; position?: number }) => [
        position === 0 &&
            tw`relative inline-flex items-center rounded-l-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-600 focus:z-10 transition ease-in-out duration-150`,
        position === 1 &&
            tw`relative -ml-px inline-flex items-center bg-gray-800 px-3 py-2 text-sm font-bold text-white focus:z-10`,
        position === 2 &&
            tw`relative -ml-px inline-flex items-center rounded-r-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-600 focus:z-10 transition ease-in-out duration-150`,
        disabled && tw`cursor-not-allowed opacity-50`,
    ]
);
