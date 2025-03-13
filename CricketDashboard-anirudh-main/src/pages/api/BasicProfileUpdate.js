import pool from '../../../src/utils/db';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {

        const cricketerId = req.url.split("?")[1].split("=")[1];
        const {  firstName, lastName, bio, born, team } = req.body;



        // Validate input
        if (!cricketerId || !firstName || !lastName || !born || !team) {
            return res.status(400).json({ error: 'Cricketer ID, First Name, Last Name, Born, and Team are required' });
        }

        // Check if cricketerId exists in the cricketers table
        const checkCricketerQuery = 'SELECT * FROM cricketers WHERE cricketerid = $1';
        const checkCricketerValues = [cricketerId];
        const checkCricketerResult = await pool.query(checkCricketerQuery, checkCricketerValues);

        if (checkCricketerResult.rows.length > 0) {
            // If cricketerId exists, insert the profile data into Cricketer_Basic_Profile
            const insertQuery = `
                INSERT INTO Cricketer_Basic_Profile (cricketer_id, firstName, lastName, bio, born, team) 
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *`;
            const insertValues = [cricketerId, firstName, lastName, bio, born, team];

            const insertResult = await pool.query(insertQuery, insertValues);
            return res.status(201).json({ message: 'Profile created successfully', data: insertResult.rows[0] });
        } else {
            return res.status(404).json({ error: 'Cricketer ID not found' });
        }

    } catch (error) {
        console.error('Database Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
