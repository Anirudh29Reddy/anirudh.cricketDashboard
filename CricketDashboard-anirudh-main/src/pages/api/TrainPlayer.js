import dotenv from 'dotenv';
import pool from '../../../src/utils/db';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id, is_active } = req.query;

  
  if (!id || is_active === undefined) {
    return res.status(400).json({ error: 'Cricketer ID and is_active status are required' });
  }

  
  if (is_active !== 'true' && is_active !== 'false') {
    return res.status(400).json({ error: 'Invalid value for is_active. It must be true or false.' });
  }

  try {
    const query = `
      UPDATE public.cricketer_coach_assignments
      SET is_active = $1
      WHERE id = $2
      RETURNING *;
    `;

    const { rows } = await pool.query(query, [is_active === 'true', id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'No cricketer found with the given ID' });
    }

    // Successfully updated
    res.status(200).json({ message: 'Cricketer status updated successfully', updatedRecord: rows[0] });

  } catch (error) {
    console.error('Error updating cricketer status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
