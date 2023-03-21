import tw from 'twin.macro'
import styled from "styled-components";

export const InputContainer = styled.input(
    ({ hasError }: { hasError: any }) => [
        tw`block w-full rounded-md border-0 py-1.5 pl-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
        hasError && tw`block w-full rounded-md border-0 py-1.5 pl-6 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6`
    ]
)