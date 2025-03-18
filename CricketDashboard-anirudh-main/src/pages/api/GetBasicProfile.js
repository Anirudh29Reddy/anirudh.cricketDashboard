import pool from '../../../src/utils/db';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { cricketerid } = req.query;

        // const cricketerId = 4;
        // Fetch the assignment data for the given cricketer ID
        const query = `
            SELECT * FROM Cricketer_Basic_Profile
            WHERE cricketer_id = $1
            ORDER BY assigned_date DESC
        `;
        const values = [cricketerid];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(200).json({ message: 'No Data' });
        }

        return res.status(200).json(result.rows);

    } catch (error) {
        console.error('Database Fetch Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
