import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ListaPage } from '../lista/lista';
import { PedidosPage } from '../pedidos/pedidos'


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	ListaPage = ListaPage;
	PedidosPage = PedidosPage;

}
