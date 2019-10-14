import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class BancoProvider {

  constructor(private nativeStorage: NativeStorage) {}

  bancoStorage(){

  	return this.nativeStorage.getItem('myitem')
    .then(() => {
         console.log('Banco criado');
    }),
    error => console.log(error);

  }

}
