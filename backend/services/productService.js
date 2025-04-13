/**
|--------------------------------------------------
| This handles business logic
|--------------------------------------------------
*/

import { productRepository } from "../repositories/productRepository.js";

export const productService = {
  async getAllProducts() {
    return productRepository.getAllProducts();
  },

  async createProduct(productData) {
    return productRepository.createProduct(productData);
  },
};
