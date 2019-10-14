import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPage } from '../pages/lista/lista';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConfirmacaoPage } from '../pages/confirmacao/confirmacao';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { PreHomePage } from '../pages/pre-home/pre-home';
import { SucessoPage } from '../pages/sucesso/sucesso';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { TabsPage } from '../pages/tabs/tabs';
import { PedidosPage } from '../pages/pedidos/pedidos';

import { NativeStorage } from '@ionic-native/native-storage';
import { BancoProvider } from '../providers/banco/banco';

import { WsBarbersService } from '../services/wsBarbers.service';
import { WsAgendaService } from '../services/wsAgenda.service';

import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {

    apiKey: "AIzaSyDBpJBCgXzA7OT-l_wAoVupETRss7iPs-I",
    authDomain: "barberinhome-3d8e9.firebaseapp.com",
    databaseURL: "https://barberinhome-3d8e9.firebaseio.com",
    projectId: "barberinhome-3d8e9",
    storageBucket: "barberinhome-3d8e9.appspot.com",
    messagingSenderId: "1005946316641"
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaPage,
    LoginPage,
    CadastroPage,
    AgendaPage,
    ConfirmacaoPage,
    PagamentoPage,
    PreHomePage,
    SucessoPage,
    RecuperarPage,
    TabsPage,
    PedidosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    LoginPage,
    CadastroPage,
    AgendaPage,
    ConfirmacaoPage,
    PagamentoPage,
    PreHomePage,
    SucessoPage,
    RecuperarPage,
    TabsPage,
    PedidosPage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    WsBarbersService,
    WsAgendaService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BancoProvider
  ]
})
export class AppModule {}
