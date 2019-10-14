import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';

import { WsAgendaService } from '../../services/wsAgenda.service';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  posts: Array<any> = new Array<any>();

  email: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public wsAgendaService: WsAgendaService,
              private viewCtrl: ViewController,
              public fire: AngularFireAuth) {

    this.email = fire.auth.currentUser.email;
  }

  
  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

    this.loadAgenda(); 
  }

  loadAgenda() {

    if(!(this.posts.length > 0)){
      let loading = this.loadingController.create();
      loading.present();

      this.wsAgendaService.getAgenda(this.email)
      .subscribe(data => {

        if(data.sucesso !== 0){
          for (let post of data.barbers) {
            this.posts.push(post)
          }
        }

        loading.dismiss();
      });
    } 
  }

}
