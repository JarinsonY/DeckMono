import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Swal from "sweetalert2";
import { schema } from "@/constants/schema";

type FormValues = {
    /** email para enviar a login */
    email: string;
    /** contraseña para enviar a login*/
    password: string;
};

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                throw new Error("Error en la autenticación");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Algo salió mal!",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email:
                <input type="text" {...register("email")} />
                {errors?.email && <span>{errors.email.message}</span>}
            </label>
            <label>
                Password:
                <input type="password" {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Ingresar"}
            </button>
        </form>
    );
};

export default LoginPage;
