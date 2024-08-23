import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);


  getAll() {
    return this.httpClient.get<Product[]>('/api-01/products');
  }
  
  post(payload: ProductPayload) {
    return this.httpClient.post('/api-01/products', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put('/api-01/products/${id}', payload);
  }
}
