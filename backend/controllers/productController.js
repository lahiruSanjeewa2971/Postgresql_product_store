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
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = sql`
        SELECT * FROM products WHERE id=${id}
    `;

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("error in get single product :", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const newProduct = await sql`
        INSERT INTO products (name, price, image) VALUES (${name},${price},${image}) RETURNING *
    `;

    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("error in create product :", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  try {
    const updatedProduct = sql`
        UPDATE products SET name=${name}, price=${price}, image=${image} WHERE id=${id} RETURNING *
    `;

    if (updatedProduct.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Product was not updated." });
    }

    res.status(201).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("error in updating a product :", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {};
