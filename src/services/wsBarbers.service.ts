import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class WsBarbersService {
	constructor(public http: Http){

	}

	getbarbers() {
		return this.http.get(Config.WSBARBERS).map(res => res.json());
	}
}
