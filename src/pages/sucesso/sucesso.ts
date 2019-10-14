import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { PreHomePage } from '../pre-home/pre-home'

import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-sucesso',
  templateUrl: 'sucesso.html',
})
export class SucessoPage {

  

  barbeiro: any;
  id_barbeiro: any;
  cep: any;
  endereco: any;
  complemento: any;
  dia: any;
  hora: any;
  img: any;

  constructor(public navCtrl: NavController, 
  				    public navParams: NavParams,
              private viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public fire: AngularFireAuth) {


  }

  ionViewWillLoad() {
    this.barbeiro = this.navParams.get('barbeiro');
    this.id_barbeiro = this.navParams.get('id_barbeiro');

    this.cep = this.navParams.get('cep');
    this.endereco = this.navParams.get('endereco');
    this.complemento = this.navParams.get('complemento');
    this.dia = this.navParams.get('dia');
    this.hora = this.navParams.get('hora');
    this.img = this.navParams.get('img');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'IMPORTANTE!',
      subTitle: 'Caso o endereço não faça parte da região de (Irterlagos - SP), o barbeiro não irá ao local solicitado',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
  	this.viewCtrl.showBackButton(false);
    this.showAlert();
  }

  logout(){

    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });

    }
    
    let taost = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    this.fire.auth.signOut();

    taost.setMessage('Até logo...').present();

    this.navCtrl.push(PreHomePage);
  }

}
