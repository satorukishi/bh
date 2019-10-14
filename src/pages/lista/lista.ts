import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, ToastController } from 'ionic-angular';

import { ConfirmacaoPage } from '../confirmacao/confirmacao';

import { PreHomePage } from '../pre-home/pre-home';

import { WsBarbersService } from '../../services/wsBarbers.service';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  posts: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public wsBarbersService: WsBarbersService,
              public toastCtrl: ToastController,
              private viewCtrl: ViewController,
              public fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

    this.loadBarbers(); 
  }


  loadBarbers(){
    if(!(this.posts.length > 0)){
      let loading = this.loadingController.create();
      loading.present();


      this.wsBarbersService.getbarbers()
      .subscribe(data => {
        for (let post of data.barbers) {
          this.posts.push(post)
        }
        loading.dismiss();
      });
    }
  }

  confirmacao(event, post){
  	this.navCtrl.push(ConfirmacaoPage, {
      item: post
    });
  }

  logout() {

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
