import tw from "twin.macro";
import styled from "styled-components";

export const PaginationContainer = styled.ul`
    ${tw`pb-8 isolate inline-flex rounded-md shadow-sm`}
`;

export const PaginationButton = styled.li(
    ({ disabled, position }: { disabled?: boolean; position?: number }) => [
        position === 0 &&
            tw`relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`,
        position === 1 &&
            tw`relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-bold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10`,
        position === 2 &&
            tw`relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`,
        disabled && tw`cursor-not-allowed opacity-50`,
    ]
);
