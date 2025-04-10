import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet()); // Security middleware for setting various HTTP headers
app.use(morgan("dev"));

app.use("/api/products", productRoutes);

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('DB initialized.')
  } catch (error) {
    console.error("Error connecting to db:", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on", PORT);
  });
});
