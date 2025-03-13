import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

//   const { cricketerid } = req.query;
    const {userId} = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'Cricketer ID is required' });
  }

  try {
    const query = `
      WITH PlayerPerformance AS (
          SELECT 
              s.cricketerid,
              c.firstname || ' ' || c.lastname AS player_name,
              c.role AS player_role,
              m.matchtype,
              COUNT(s.ballno) AS balls_faced,
              COALESCE(SUM(s.runs), 0) AS total_runs,
              ROUND((COALESCE(SUM(s.runs), 0)::decimal / NULLIF(COUNT(s.ballno), 0)) * 100, 2) AS strike_rate,
              SUM(CASE WHEN s.wicket THEN 1 ELSE 0 END) AS total_wickets,
              CASE 
                  WHEN COUNT(s.ballno) = 0 THEN 'No Data'
                  WHEN (SUM(s.runs)::decimal / NULLIF(COUNT(s.ballno), 0)) * 100 >= 150 THEN 'Excellent'
                  WHEN (SUM(s.runs)::decimal / NULLIF(COUNT(s.ballno), 0)) * 100 >= 120 THEN 'Good'
                  WHEN (SUM(s.runs)::decimal / NULLIF(COUNT(s.ballno), 0)) * 100 >= 80 THEN 'Average'
                  ELSE 'Poor'
              END AS performance_rating
          FROM public.scoredata s
          JOIN public.match m ON s.matchid = m.matchid
          JOIN public.cricketers c ON s.cricketerid = c.cricketerid
          GROUP BY s.cricketerid, c.firstname, c.lastname, c.role, m.matchtype
      )
      
      SELECT 
          pp.cricketerid,
          pp.player_name,
          pp.player_role,
          pp.matchtype,
          pp.balls_faced,
          pp.total_runs,
          pp.strike_rate,
          pp.total_wickets,
          pp.performance_rating,
          cf.coachid,
          cf.firstname || ' ' || cf.lastname AS coach_name,
          cf.specialization
      FROM PlayerPerformance pp
      JOIN public.coachesfinal cf 
          ON (pp.player_role = 'Batsman' AND cf.specialization ILIKE '%Batting%')
          OR (pp.player_role = 'Bowler' AND cf.specialization ILIKE '%Bowling%')
      WHERE pp.performance_rating = 'Average' AND pp.cricketerid = $1
      ORDER BY pp.matchtype, pp.player_role, cf.coachid;
    `;

    const { rows } = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(201).json({ message: 'Excellent' });
    }

    res.status(200).json(rows);

  } catch (error) {
    console.error('Error fetching player performance data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
