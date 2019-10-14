import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-pre-home',
  templateUrl: 'pre-home.html',
})
export class PreHomePage {

  tabBarElement: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private viewCtrl: ViewController) {

    this.tabBarElement = document.querySelector('.show-tabbar');
  }


  ngAfterViewInit() {
    this.viewCtrl.showBackButton(false);
  }

  cadastrar() {
  	this.navCtrl.push(CadastroPage);
  }

  logar() {
  	this.navCtrl.push(LoginPage);
  }

}
