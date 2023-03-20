import users from "@/constants/data/users.json";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    email: string;
    password: string;
};

interface User {
    username: string;
    email: string;
    password: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    const usersDB: User[] = users as User[];
    const usuario = usersDB.find(
        (user: Data) => user.email === email && user.password === password
    );
    if (usuario) {
        res.status(200).json({
            username: usuario.username,
            email: usuario.email,
        });
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }
}
