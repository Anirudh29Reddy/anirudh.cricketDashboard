import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id } = req.query;

  console.log(id,"ph");
  try {
    const match = {
      matchid: "M004",
      matchtype: "T20",
      dateofmatch: "2024-02-20",
      venue: "Eden Gardens",
      hometeam: "India",
      awayteam: "Australia",
      matchresult: "Loss"
    };

    const scoredata = [
      {
        scoredataid: "S001",
        matchid: "M004",
        ballno: 1,
        outcome: "Run",
        runs: 4,
        deliverytype: "Normal",
        wicket: false,
        cricketerid: id
      },
      {
        scoredataid: "S002",
        matchid: "M004",
        ballno: 2,
        outcome: "Wicket",
        runs: 0,
        deliverytype: "Bouncer",
        wicket: true,
        cricketerid: id
      }
    ];

    const matchQuery = `
      INSERT INTO public.match (matchid, matchtype, dateofmatch, venue, hometeam, awayteam, matchresult)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (matchid) DO NOTHING;
    `;
    await pool.query(matchQuery, Object.values(match));

    const scoreQuery = `
      INSERT INTO public.scoredata (scoredataid, matchid, ballno, outcome, runs, deliverytype, wicket, cricketerid)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (scoredataid) DO NOTHING;
    `;

    for (const record of scoredata) {
      await pool.query(scoreQuery, Object.values(record));
    }

    res.status(201).json({ message: 'Match and Score data inserted successfully' });

  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
//to upload every player data