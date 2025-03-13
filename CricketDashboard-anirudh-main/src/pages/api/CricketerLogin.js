import dotenv from 'dotenv';
import pool from '../../../src/utils/db';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ error: 'Phone number and password are required' });
    }

    // Check if user exists
    const query = 'SELECT * FROM Cricketers WHERE PhoneNumber = $1';
    const result = await pool.query(query, [userId]);

    console.log(result.rows.length, "res");

    if (result.rows.length == 0) {
      return res.status(401).json({ error: 'Invalid phone number or password' });
    }

    const user = result.rows[0];
    console.log(user);
    
    // Compare password with stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid phone number or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
