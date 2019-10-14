import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';



@Injectable()
export class WsAgendaService {
	constructor(public http: Http){

	}

	getAgenda( email ) {
		return this.http.get(Config.WSAGENDA+'?email='+email).map(res => res.json());
	}
}
