
import { Component, Input,Output,EventEmitter } from '@angular/core';
import {Product} from '../../models/producto.model'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category:'',
    description:''

  };

  @Output()addedProduct = new EventEmitter<Product>()
  
  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
}
