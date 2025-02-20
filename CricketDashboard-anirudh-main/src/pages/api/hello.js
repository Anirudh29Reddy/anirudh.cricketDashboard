import dotenv from 'dotenv';
import pool from '../../../src/utils/db';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import JWT for authentication

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
      coachingExperience,
      qualifications,
      specialization,
      status,
      profileImage,
      password,
      confirmPassword
    } = req.body;

    // Check if all required fields are provided
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !dateOfBirth ||
      !gender ||
      !nationality ||
      !address ||
      !coachingExperience ||
      !qualifications ||
      !specialization ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert data into the database
    const query = `INSERT INTO CoachesFinal (
      FirstName, LastName, Email, PhoneNumber, DateOfBirth, Gender, 
      Nationality, Address, CoachingExperience, Qualifications, 
      Specialization, Status, ProfileImage, Password, confirm_password
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,$15) RETURNING *`;

    const values = [
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      nationality,
      address,
      coachingExperience,
      qualifications,
      specialization,
      status || 'Active',
      profileImage,
      hashedPassword, // Store the hashed password
      confirmPassword // Store confirmPassword (plain text) if needed
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
