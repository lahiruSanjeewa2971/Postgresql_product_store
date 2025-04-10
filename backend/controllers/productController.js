import { sql } from "../config/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in getAllProducts :", error);
  }
};

export const getProduct = async (req, res) => {};

export const createProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
