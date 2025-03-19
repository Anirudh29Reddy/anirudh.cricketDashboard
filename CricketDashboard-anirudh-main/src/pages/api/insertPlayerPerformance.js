import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { player_name, performance } = req.body;

  if (!player_name || !performance) {
    return res.status(400).json({ error: 'Player name and performance are required' });
  }

  try {
    // Assuming you want to store performance in a table named `player_performance`
    const query = `
      INSERT INTO public.player_performance (player_name, performance, created_at)
      VALUES ($1, $2, NOW())
      RETURNING *;
    `;

    const { rows } = await pool.query(query, [player_name, performance]);

    if (rows.length === 0) {
      return res.status(500).json({ error: 'Failed to insert player performance' });
    }

    res.status(201).json({
      message: 'Player performance added successfully!',
      performance: rows[0],
    });

  } catch (error) {
    console.error('Error inserting player performance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
