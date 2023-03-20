import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // asumiendo que pasas el id del pokemon como parámetro en la URL

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemonInfo = {
      image: data.sprites.front_default,
      name: data.name,
      weight: data.weight,
      moves: data.moves.slice(0, 2).map((move: any) => move.move.name),
    };

    res.status(200).json(pokemonInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener información del pokemon" });
  }
}
