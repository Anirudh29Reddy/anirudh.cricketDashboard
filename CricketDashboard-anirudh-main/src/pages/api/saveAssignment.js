import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    
    const { cricketer_id, coach_id } = req.body;

    console.log("Received data - Cricketer ID:", cricketer_id, "Coach ID:", coach_id);

    
    if (!cricketer_id || !coach_id) {
      return res.status(400).json({ error: 'Cricketer ID and Coach ID are required' });
    }

    
    const query = `INSERT INTO Cricketer_Coach_Assignments (cricketer_id, coach_id) 
                   VALUES ($1, $2) RETURNING *`;
    const values = [cricketer_id, coach_id];

    const result = await pool.query(query, values);

    console.log("Assignment saved successfully:", result.rows[0]);

    // Send success response
    return res.status(201).json({
      message: 'Assignment saved successfully',
      data: result.rows[0],
    });

  } catch (error) {
    console.error('Database Insert Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
