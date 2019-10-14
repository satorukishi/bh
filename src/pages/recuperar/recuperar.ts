import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

  public okLogin:boolean = false;

	@ViewChild('email') email;

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
  				public toastCtrl: ToastController,
  				public fire: AngularFireAuth) { }

  recuperarSenha() {

  	let toast = this.toastCtrl.create({duration: 2000, position: 'botom'});

    if(this.email.value == '' ){
        toast.setMessage('Preencha o e-mail').present();  
    }else{ this.okLogin = true; }

  	this.fire.auth.sendPasswordResetEmail(this.email.value)
  	.then(() => {
  		toast.setMessage('A solicitacao foi enviada para seu e-mail').present();
  		this.navCtrl.pop();
  	})
  	.catch((error: any) => {
        if(error.code == 'auth/user-not-found'){
          toast.setMessage('E-mail invalido').present();  
        }
  	})
  }
}
