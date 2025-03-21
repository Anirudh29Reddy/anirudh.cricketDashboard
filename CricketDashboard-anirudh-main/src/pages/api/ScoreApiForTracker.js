import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId } = req.query;  
  console.log("Received userId:", req.query);

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId parameter' });
  }

  try {
    const matchQuery = `
      SELECT 
        MatchID AS match_id, 
        MatchType AS match_type, 
        DateOfMatch AS date_time, 
        Venue AS venue, 
        AwayTeam AS opposite_team
      FROM Match;
    `;

    const scoreQuery = `
      SELECT 
        s.matchid AS match_id,
        s.scoredataid AS ball_record_id,
        s.ballno AS ball_no,
        s.outcome,
        s.runs,
        s.deliverytype AS delivery_type,
        CASE 
            WHEN s.wicket THEN 'Yes' ELSE 'No' 
        END AS wicket,
        c.firstname || ' ' || c.lastname AS player_name,
        c.role AS player_role
      FROM public.scoredata s
      JOIN public.cricketers c ON s.cricketerid = c.cricketerid
      WHERE s.matchid = 'M004' AND s.cricketerid = $1
      ORDER BY s.ballno;
    `;

    const [matchResult, scoreResult] = await Promise.all([
      pool.query(matchQuery),
      pool.query(scoreQuery,[userId])
    ]);

    res.status(200).json({
      matches: matchResult.rows,
      scores: scoreResult.rows
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
