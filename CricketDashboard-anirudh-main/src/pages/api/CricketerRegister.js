import dotenv from 'dotenv';
import pool from '../../../src/utils/db';
import bcrypt from 'bcryptjs'; 

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      nationality,
      address,
      battingStyle,
      bowlingStyle,
      role,
      preferredPosition,
      status,
      profileImage,
      height,
      weight,
      currentTeam,
      password,
      confirmPassword
    } = req.body;

    // Check if all required fields are provided
    // if (
    //   !firstName ||
    //   !lastName ||
    //   !email ||
    //   !phoneNumber ||
    //   !dateOfBirth ||
    //   !gender ||
    //   !nationality ||
    //   !address ||
    //   !battingStyle ||
    //   !bowlingStyle ||
    //   !role ||
    //   preferredPosition ||
    //   !height ||
    //   !weight ||
    //   !currentTeam ||
    //   !password ||
    //   !confirmPassword
    // ) {
    //   return res.status(400).json({ error: 'All fields are required' });
    // }

    // Validate if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert data into the database
    const query = `INSERT INTO Cricketers (
      FirstName, LastName, Email, PhoneNumber, DateOfBirth, Gender, 
      Nationality, Address, BattingStyle, BowlingStyle, Role, 
      PreferredPosition, Status, ProfileImage, Height, Weight, 
      CurrentTeam, Password
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`;

    const values = [
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      nationality,
      address,
      battingStyle,
      bowlingStyle,
      role,
      preferredPosition,
      status || 'Active',
      profileImage,
      height,
      weight,
      currentTeam,
      hashedPassword 
    ];

    const result = await pool.query(query, values);
    console.log("Data inserted successfully:", result.rows[0]);

    // Send success response
    return res.status(201).json({ message: 'Data inserted successfully', data: result.rows[0] });

  } catch (error) {
    console.error('Database Insert Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}