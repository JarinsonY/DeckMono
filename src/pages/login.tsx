import { useState } from "react";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Image from "next/image";
import { useRouter } from "next/router";

import { schema } from "@/constants/schema";
import { useAuth } from "@/context/AuthContext";

import tw from 'twin.macro'
import styled from "styled-components";
import { useEffect } from "react";

import Input from "@/components/Input";
import JPLogo from "../../assets/images/JP.png";

import Loader from "@/components/Loader";
import Button from "@/components/shared/Button";

import { DataLogin } from "@/utils/types";

const Page = styled.div`
    ${tw`h-screen bg-cyan-900 flex flex-col items-center justify-center flex-1 px-20 text-center`}
`;

const Main = styled.div`
    ${tw`w-2/4 flex flex-col p-8 text-left items-center justify-center rounded-xl bg-white`}
`;

const Logo = styled.div`
    ${tw`w-4/5 flex flex-col items-center rounded-xl py-2.5 px-8 bg-zinc-300`}
`;

const Title = styled.h1`
    ${tw`mt-4 text-2xl font-bold text-cyan-900`}
`;

const Form = styled.form`
    ${tw`w-full flex flex-col py-1 px-8 rounded-xl text-white my-4`}
`;

const LoginPage = () => {
    const router = useRouter();
    const { login } = useAuth();

    // Verificar si el usuario está autenticado
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/');
        }
    }, [router]);

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DataLogin>({
        resolver: yupResolver(schema),
        mode: "all"
    });

    const onSubmit: SubmitHandler<DataLogin> = async (data: DataLogin) => {
        setIsLoading(true);
        try {
            await login(data.email, data.password);
            router.push("/");
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Algo salió mal!",
            });
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <Page>
            <Main>
                <Logo>
                    <Image src={JPLogo} alt="Logo Jarinson Palacios" width={100} height={100} />
                </Logo>
                <Title>DEX<strong>MONO</strong></Title>

                {isLoading
                    ? <Loader />
                    : <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="email"
                            id="email"
                            label="Email"
                            placeholder="you@example.com"
                            aria-invalid="true"
                            aria-describedby="email-error"
                            hasError={errors?.email}
                            register={register}
                            errors={errors}
                        />

                        <Input
                            type="password"
                            id="password"
                            label="Password"
                            aria-describedby="password-error"
                            hasError={errors?.password}
                            register={register}
                            errors={errors}
                        />

                        <Button
                            type="submit"
                            label="Login"
                            disabled={isLoading}
                        />

                    </Form>
                }
            </Main>
        </Page>
    );
};

export default LoginPage;
