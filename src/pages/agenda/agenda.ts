import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

	today

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
