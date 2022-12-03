import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Product} from '../../models/producto.model'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {


  @Input() product : Product={
    id:'',
    precio:0,
    imagen:'',
    nombre:''
  };
}
