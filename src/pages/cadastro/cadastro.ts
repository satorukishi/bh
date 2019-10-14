import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  @ViewChild('nome') nome;
  @ViewChild('email') email;
  @ViewChild('celular') celular;
  @ViewChild('password') password;

  okNome:boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toasCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar() {
    let toast = this.toasCtrl.create({duration: 2000, position: 'bottom'});

    if(this.nome.value == '' ){
      toast.setMessage('Preencha o nome').present();   
    }else{
      if(this.email.value == '' ){
        toast.setMessage('Preencha o e-mail').present();  
      }else{
         if(this.celular.value == '' ){
          toast.setMessage('Preencha o Celular').present();  
         }else{
          if(this.password.value == '' ){
            toast.setMessage('Preencha a senha').present();  
           }else{
             this.okNome = true;
           } 
         }
      } 
    }

    

    if(this.okNome) {
      this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then( data => {
        this.navCtrl.push(TabsPage);
      })
      .catch((error: any)=> {
        if(error.code == 'auth/email-already-in-use'){
          toast.setMessage('E-mail ja em uso').present();  
        }else if(error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail nao valido').present();  
        }else if(error.code == 'auth/operation-not-allowed'){
          toast.setMessage('Habilitacao de usuario').present();  
        }else if(error.code == 'auth/weak-password'){
          toast.setMessage('Senha fraca').present();  
        }
      })
    }
  	
  }

}
