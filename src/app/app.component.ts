import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title='tempConverter';
  public c:any;
  public f:any;
  
  
   convertTemp() {
    
    // var c = document.getElementById('c');
    // var  f = document.getElementById('f');
    
   if(this.c != '') {
    this.f = (this.c * 9 / 5 + 32).toFixed(2);
    this.c = '';
   } else  {
    this.c =((this.f - 32) * 5 / 9).toFixed(2);
    this.f = '';
   }
  }
}
