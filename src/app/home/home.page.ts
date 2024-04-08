import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado: any;
  constructor(private apiService: ApiService){
    this.getData();
  }
  getData(){
    this.apiService.getData().subscribe(data =>{
      this.resultado = [];
    })
  
  }
}
