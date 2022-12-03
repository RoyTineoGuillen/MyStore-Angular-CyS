import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import {Product} from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-CyS';
  linkImg = 'https://api.lorem.space/image/movie';

  products: Product[] = [
    {
      id: '1',
      nombre: 'Automobil de juguete',
      precio: 100,
      imagen: 'https://api.lorem.space/image/movie'
  },
  {
      id: '2',
      nombre: 'Muñeca de trapo',
      precio: 180,
      imagen: 'https://api.lorem.space/image/movie'
  },
  {
      id: '3',
      nombre: 'Pelota de futbol',
      precio: 120,
      imagen: 'https://api.lorem.space/image/movie'
  }
  ]



  onLoaded(img: string){
    console.log('log del padre', img);
    
  }
}
