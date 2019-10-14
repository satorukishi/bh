import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';


import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SucessoPage } from '../sucesso/sucesso';

import { AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-confirmacao',
  templateUrl: 'confirmacao.html',
})
export class ConfirmacaoPage {

  item: any;

  data: Observable<any>;

  myDate: string = new Date().toISOString();

	public event = {
	    month: this.myDate, 
	    timeStarts: '10:30'
	}


  @ViewChild('cep') cep;
  @ViewChild('endereco') endereco;
  @ViewChild('complemento') complemento;
  @ViewChild('dia') dia;
  @ViewChild('hora') hora;

  okEndereco: boolean = false;

  email: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public http: Http,
              public fire: AngularFireAuth) {

    this.email = fire.auth.currentUser.email;


  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
     
  }

  
  pagamento() {

    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})

    if(this.cep.value == '' ){
      toast.setMessage('Preencha o cep do local').present();   
    }else{
      if(this.endereco.value == '' ){
        toast.setMessage('Preencha o endereço').present();  
      }else{
         if(this.complemento.value == '' ){
          toast.setMessage('De mais referencias').present();  
         }else{
             this.okEndereco = true;
           } 
         }
      } 


    if(this.okEndereco){
      const confirm = this.alertCtrl.create({
        title: 'Tem certeza que deseja chamar o barbeiro?',
        message: 'Após clicar em confirmar o barbeiro irá até o local escolhido no dia e na hora selecionados',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.salvarAgendamento();
            }
          }
        ]
      });
      confirm.present();
    }

  } //end pagamento


  salvarAgendamento() {

    let dia = this.dia.value;
    dia = (dia.year+"/"+dia.month+"/"+dia.day);

    let hora = this.hora.value;
    hora = hora.hour+":"+hora.minute;

    var url = 'http://barberinhome.com.br/app/rest/wsAddSolicitacao';
    let postData = new FormData();

    postData.append('cep', this.cep.value);
    postData.append('endereco', this.endereco.value);
    postData.append('complemento', this.complemento.value);
    postData.append('dia', dia);
    postData.append('hora', hora);
    postData.append('id_cliente', this.email);
    postData.append('id_barbeiro', this.item.id_barber);

    this.data = this.http.post(url, postData);

    this.data.subscribe(data => {

       this.navCtrl.push(SucessoPage,{
          barbeiro: this.item.nome_barber,
          id_barbeiro: this.item.id_barber,
          cep: this.cep.value,
          endereco: this.endereco.value,
          complemento: this.complemento.value,
          dia: dia,
          hora: hora,
          id_cliente: this.email,
          img: this.item.img
       });   
    })

  }


}
