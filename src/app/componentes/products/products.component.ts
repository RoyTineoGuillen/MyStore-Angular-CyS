import { Component } from '@angular/core';
import { Product } from '../../models/producto.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    total=0;
  myShopingCart:Product[]=[];

  products: Product[] = [
    {
      id: '1',
      nombre: 'Automobil de juguete',
      precio: 100,
      imagen: 'https://api.lorem.space/image/movie',
    },
    {
      id: '2',
      nombre: 'Muñeca de trapo',
      precio: 180,
      imagen: 'https://api.lorem.space/image/movie',
    },
    {
      id: '3',
      nombre: 'Pelota de futbol',
      precio: 120,
      imagen: 'https://api.lorem.space/image/movie',
    },
    {
      id: '3',
      nombre: 'Pelota de futbol',
      precio: 120,
      imagen: 'https://api.lorem.space/image/movie',
    },
    {
      id: '3',
      nombre: 'Pelota de futbol',
      precio: 120,
      imagen: 'https://api.lorem.space/image/movie',
    },
  ];

  onAddToShopingCart(product: Product) {
    console.log(product);
    this.myShopingCart.push(product)
    this.total = this.myShopingCart.reduce((sum, item)=>sum+item.precio,0)
  }
}
