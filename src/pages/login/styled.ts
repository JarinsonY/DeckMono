import tw from 'twin.macro'
import styled from "styled-components";

export const Page = styled.div`
    ${tw`h-screen bg-cyan-900 flex flex-col items-center justify-center flex-1 px-20 text-center`}
`;

export const Main = styled.div`
    ${tw`w-2/4 flex flex-col p-8 text-left items-center justify-center rounded-xl bg-white`}
`;

export const Logo = styled.div`
    ${tw`w-4/5 flex flex-col items-center rounded-xl py-2.5 px-8 bg-zinc-300`}
`;

export const Title = styled.h1`
    ${tw`mt-4 text-2xl font-bold text-cyan-900`}
`;

export const Form = styled.form`
    ${tw`w-full flex flex-col py-1 px-8 rounded-xl text-white my-4`}
`;

export const Button = styled.button`
    ${tw`cursor-pointer my-3.5 py-3 px-4 bg-rose-500 box-border text-white font-semibold rounded-xl uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-600 duration-300`}
`;