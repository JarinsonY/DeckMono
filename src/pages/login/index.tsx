import { useState } from "react";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Image from "next/image";
import { useRouter } from "next/router";

import { schema } from "@/constants/schema";
import { useAuth } from "@/context/AuthContext";


import Input from "@/components/Input";
import JPLogo from "../../assets/images/JP.png";

import { Button, Form, Logo, Main, Page, Title } from "./styled";

type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const { login } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode: "all"
    });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
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

                <Form onSubmit={handleSubmit(onSubmit)}>
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
                        type="submit" disabled={isLoading}
                    >
                        {isLoading
                            ? <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                            : "Login"
                        }
                    </Button>
                </Form>
            </Main>
        </Page>
    );
};

export default LoginPage;
