//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs'
import {variables} from '../../app/variables'

@Injectable()
export class OrdersProvider {
  private API_URL = variables.API_GET_CPWMS_PEDIDOS;
  loader =  this.loadingCtrl.create({
    content: "Buscando dados..."   });    

  constructor(public http: Http,
              public loadingCtrl: LoadingController) {
                
                  this.loader.present();   
  }
  
  
  
  getAll(page){
    
    return  new Promise((resolve,reject) => {
      let url = this.API_URL + 'CPWMSPEDIDOS?page=' + page;
      this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
        this.loader.dismiss();
      },
      (error) => {
        reject(error.json());
        this.loader.dismiss();
      });
    });
  }

}
/*

 constructor(
  public loadingCtrl: LoadingController
) {
let loader = this.loadingCtrl.create({
        content: "Aguarde..."          
      });
       loader.present();
this.conn.getConn('Weather').subscribe(data => {
          this.previsao = data;
          this.previsaoSemana = data.forecast;
          this.reduzirJson(this.previsaoSemana);
          loader.dismiss();
       }, error=>{
         this.conn.errorToast(error.status);
         loader.dismiss();
        });
*/