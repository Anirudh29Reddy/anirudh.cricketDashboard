// File: /pages/api/cricketer-coach-assignments.js
import pool from "../../../src/utils/db"; 
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Query to fetch the assignment data along with cricketer name 
    const query = `
    SELECT 
    cca.id,
    cca.cricketer_id,
    cca.coach_id,
    cca.assigned_date,
    cca.is_active,
    c.firstname AS cricketer_firstname,
    c.lastname AS cricketer_lastname
    FROM 
    public.cricketer_coach_assignments cca
    JOIN 
    public.cricketers c 
    ON 
    cca.cricketer_id = c.cricketerid
    WHERE 
    cca.coach_id = 7;
    `;

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No assignments found" });
    }

    return res.status(200).json(result.rows);

  } catch (error) {
    console.error("Database Fetch Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
