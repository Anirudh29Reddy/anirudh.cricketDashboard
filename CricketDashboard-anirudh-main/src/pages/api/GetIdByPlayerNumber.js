import pool from '../../../src/utils/db';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
         const { phonenumber } = req.query;

        
        const query = `select cricketerid from cricketers where phonenumber = $1`;
        const values = [phonenumber];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No assignments found for this cricketer' });
        }

        return res.status(200).json(result.rows);

    } catch (error) {
        console.error('Database Fetch Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
