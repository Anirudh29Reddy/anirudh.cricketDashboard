import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Dummy cricketer ID
  const {userId} = req.query;

  try {
    const query = `
      SELECT 
          s.cricketerid,
          m.matchtype,
          s.matchid,
          s.ballno,
          s.outcome,
          s.runs,
          s.deliverytype,
          s.wicket
      FROM public.scoredata s
      JOIN public.match m ON s.matchid = m.matchid
      WHERE s.cricketerid = $1
      ORDER BY m.matchtype, s.matchid, s.ballno;
    `;

    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No score data found for this cricketer' });
    }

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching score data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
