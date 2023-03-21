import users from "@/constants/data/users.json";
import { DataLogin } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";

interface UserDB {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    age: number;
    password: string;
}

// Clave secreta para firmar los tokens
const secret = process.env.JWT_SECRET || "secret";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Solo se aceptan peticiones POST
    if (req.method !== "POST") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { email, password } = req.body;

    const usersDB: UserDB[] = users as UserDB[];

    const usuario = usersDB.find(
        (user: DataLogin) => user.email === email && user.password === password
    );

    if (usuario) {
        const token = jwt.sign({ sub: usuario.id }, secret);
        res.status(200).json({
            id: usuario.id,
            name: usuario.name,
            username: usuario.username,
            email: usuario.email,
            phone: usuario.phone,
            age: usuario.age,
            token,
        });
    } else {
        res.status(401).json({ message: "Wrong email or password" });
    }
}
