import { LocalizedString } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

img: string ='';


@Input('img')
set changeImg(newImg:string){
    this.img = newImg;
    console.log('cambios solo de la imagen ==>',this.img);
    
}

@Input() alt: string ='';
@Output() loaded = new EventEmitter<string>();

imagenDefault = './assets/default.png';

// counter = 0;

// counterFn: number|undefined;

constructor (){
// antes del render
// NO async-- una sola vez, once time
    console.log('constructor','imgValue =>',this.img);
    
}

ngOnChanges(changes: SimpleChanges) {
    // antes y durante el render
    // evalua los cambios en los inputs corre tantas veces como se actualice el input 

    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log(changes);
    

}

ngOnInit(): void {
    // antes del render
    // Aqui se puede correr cosas asincronas, llamada Api Promesas
    //corre una sola vez

//     console.log('ngOnInit', 'imgValue =>', this.img);
//    this.counterFn =  window.setInterval(()=>{
//         this.counter += 1;
//         console.log('corriendo el contador');
        
//     },1000)

}

ngAfterViewInit(): void {
  // despues que el render
  // normalmente se corre los hijos
     console.log('ngAfterViewInit', 'imgValue =>', this.img);

}

ngOnDestroy(): void {
    //se corre cuando se elimina este componente
    console.log('ngOnDestroy', 'imgValue =>', this.img);

    // window.clearInterval(this.counterFn);

}

imgError(){
this.img= this.imagenDefault;
}


imgLoaded(){
  console.log('cargado de hijo');
  this.loaded.emit(this.img);
  
}




}

