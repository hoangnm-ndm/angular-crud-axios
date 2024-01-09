import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    try {
      this.products = await this.productService.getProducts();
      console.log(this.products);
    } catch (error) {
      // Xử lý lỗi nếu cần
    }
  }
}
