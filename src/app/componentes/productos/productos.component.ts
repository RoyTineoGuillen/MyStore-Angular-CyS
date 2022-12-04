import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
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
    precio: 0,
    imagen: '',
    nombre: '',
  };

  @Output()addedProduct = new EventEmitter<Product>()
  
  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
}
