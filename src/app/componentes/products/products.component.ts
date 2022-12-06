import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { StoreService } from "../../services/store.service";
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  total = 0;
  myShopingCart: Product[] = [];

  products: Product[] = [];

  today = new Date();
  
  date =  new Date(2021,1,21)
  constructor(
    private StoreService: StoreService,
    private ProductsService: ProductsService
    
    ) {
    this.myShopingCart= this.StoreService.getShoppingCart();}

  onAddToShopingCart(product: Product) {
    console.log(product);
    this.StoreService.addProducto(product)
    this.total = this.StoreService.getTotal();
  }

  ngOnInit():void{
    this.ProductsService.getAllProducts().subscribe(
        data=>{this.products = data
        }
    )
  }
}
