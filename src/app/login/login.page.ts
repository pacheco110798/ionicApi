import { Component, OnInit } from '@angular/core';
import { accesos } from 'src/models/acceso.models';
import { AccederService } from '../servicios/acceder.service';
import { NavController , AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accesos = new accesos();
  constructor(
    public servicioacceso: AccederService, 
    public nav:NavController,
    public alertController: AlertController
  ) { }
 
 async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Revisa la informacion',
      message: 'Credenciales incorrectas',
      buttons: ['OK']
    });

    await alert.present();
  }
  async Buscar()
  {
     this.servicioacceso.usuarioacceso(this.accesos).subscribe(async (response:any)=>{
      let data=JSON.parse(response);
      console.log(response);
 
      if(data.message=='exitoso'){
        this.nav.navigateRoot('home');
      }
      else {
        this.presentAlert();
      }
      console.log(response);
      
      });
 
  }
  ngOnInit() {
  }

}
