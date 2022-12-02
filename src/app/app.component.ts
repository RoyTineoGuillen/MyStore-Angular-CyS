import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-CyS';
  linkImg = 'https://api.lorem.space/image/movie'


  onLoaded(img: string){
    console.log('log del padre', img);
    
  }
}
