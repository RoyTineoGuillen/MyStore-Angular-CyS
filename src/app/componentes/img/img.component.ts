import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

@Input() img: string ='dasds';
@Output() loaded = new EventEmitter<string>();

imagenDefault = './assets/default.png';

imgError(){
this.img= this.imagenDefault;
}


imgLoaded(){
  console.log('cargado de hijo');
  this.loaded.emit(this.img);
  
}
}

