import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor() {}

  async getProducts() {
    try {
      const { data } = await axios.get(this.apiUrl);
      return data;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  }

  async getProductById(productId: string) {
    const url = `${this.apiUrl}/${productId}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error getting product with ID ${productId}:`, error);
      throw error;
    }
  }
}
