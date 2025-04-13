/**
|--------------------------------------------------
| Handles actual database queries
|--------------------------------------------------
*/

import { sql } from "../config/db.js";

export const productRepository = {
  async getAllProducts() {
    return sql`SELECT * FROM products ORDER BY create_at DESC`;
  },

  //   async getProductById(id){
  //     const [product] sql``
  //   }

  async createProduct({ name, price, image }) {
    const [newProduct] =
      await sql`INSERT INTO products (name, price, image) VALUES (${name}, ${price}, ${image}) RETURNING *`;
    return newProduct;
  },
};
