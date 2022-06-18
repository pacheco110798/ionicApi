import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accesos } from 'src/models/acceso.models';
@Injectable({
  providedIn: 'root'
})
export class AccederService {

  constructor(public http: HttpClient) { }
  usuarioacceso(accesos){
    let options = {
      headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
      }
      };    
      console.log(accesos);
      return this.http.post('http://localhost:/api/acceso.php',accesos,options);
  }
}
