import { Component } from '@angular/core';
import { accesos } from 'src/models/acceso.models';
import { AccederService } from '../servicios/acceder.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  accesos = new accesos();
  
  constructor(public servicioacceso: AccederService) {}

  async Buscar()
  {
     this.servicioacceso.usuarioacceso(this.accesos).subscribe(async (response:any)=>{
      let data=JSON.parse(response);
      console.log(response);
 
      if(data.message=='exitoso'){
      }
      else {
      }
      console.log(response);
      
      });
 
  }
}
