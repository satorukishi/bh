import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';


import { RecuperarPage } from '../recuperar/recuperar';

import { TabsPage } from '../tabs/tabs';


import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  public okLogin:boolean = false;

  public showing:boolean = false;

  public isenabled:boolean= true;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toasCtrl: ToastController,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading() {  
    
  }

  entrar() {
    let toast = this.toasCtrl.create({duration: 2000, position: 'bottom'});

      this.loadingCtrl.create({
      
      duration: 3000,
      dismissOnPageChange: true
    }).present();
      
      if(this.email.value == '' ){
        toast.setMessage('Preencha o e-mail').present();  
      }else {
        if(this.password.value == '' ){
          toast.setMessage('Preencha a senha').present();  
         }else{
           this.okLogin = true;
         }
      }

      if(this.okLogin) {
      this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then( data => {
        this.navCtrl.push(TabsPage); 
      })
      .catch((error: any)=> { 
        if(error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail invalido').present();  
        }else if(error.code == 'auth/user-disabled'){
          toast.setMessage('usuario desabilitado').present();  
        }else if(error.code == 'auth/user-not-found'){
          toast.setMessage('Habilitacao de usuario').present();  
        }else if(error.code == 'auth/wrong-password'){
          toast.setMessage('Senha errada').present();  
        }
      })
    }
  }

  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }

}
