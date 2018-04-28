import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, InfiniteScroll, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { OrdersProvider } from './../../providers/orders/orders' 
import { OrderDetailsPage } from '../order-list/order-details/order-details'
import {Observable} from 'rxjs';
import 'rxjs/add/observable/interval';

//@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  [x: string]: any;
  orders: any[] = [];
  page: number;
  loader1: any;
  filiais: any[];
  filiais1:any[];
  refresher: any;
  public select_filial: any;
  public estado: any = "";
  public originalArray: any[];
  public hasFilter: boolean;
  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  
  changeColor(param){
    let badge_color = "";
        switch(param.trim()) {
          case "Previsto":
              return  "default"; 
          case "Cancelado":
              return "danger";
          case "A processar":
              return "secondary";
          case "Pendente":
              return "dark";
      }
      return badge_color;
    }

constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private toast: ToastController,
            private ordersProvider: OrdersProvider,
            public  modalCrtl: ModalController,
            public loadingCtrl: LoadingController ) { }


  

  ionViewDidEnter() {
        // this.orders = [{status_wmas:""}];
        //this.refresher.unsubscribe();
        this.filiais = ['Todas'];
        this.filiais1 = ['Todas'];
        this.page = 1;
        this.infiniteScroll.enable(true);
        this.getAllOrders();
        this.select_filial = 'Todas'
        this.estado = 'Todos'
        this.hasFilter = false;
       // this.refresher = Observable.interval(120000)
        //.subscribe((val) => { this.refresherList();})
  }

  getAllOrders(){
    this.ordersProvider.getAll(this.page)
    .then((result: any) => { 
      for (var i = 0; i < result.pedidos.length; i++) {
        var order = result.pedidos[i];
        var filialConfere = result.pedidos[i].filial_entrega;
        this.orders.push(order);
        this.filiais.push(filialConfere)          
      }
      for (var j = 0; j < this.filiais.length; j++) {
        if (this.filiais1.indexOf(this.filiais[j]) < 0)
          this.filiais1.push(this.filiais[j]);
        }

      if (this.loader1 != null) {
        this.loader1.dismiss();
      }
      if(this.infiniteScroll){
        this.infiniteScroll.complete();
        if(this.orders.length== result.total){
          this.infiniteScroll.enable(false);
        }
      }
     
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao listar Pedidos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    });
   
  }

  getOrders(){
    console.log('chegamos no getOrders')
      setTimeout(() => {
        this.page += 1;
        this.getAllOrders();
      }, 500);
  }

  presentModal(data) {
    let modal = this.modalCrtl.create(OrderDetailsPage,{data});
    modal.present()
  }

  refreshList() {
    this.loader1 = this.loadingCtrl.create({content: "Buscando dados..."   });    
    this.loader1.present();
    this.orders = [];
    this.page = 1;
    this.getOrders();
  }

  refresherList() {
    console.log("Refresher reload")
    this.loader1 = this.loadingCtrl.create({content: "Buscando dados..."   });    
    this.loader1.present();
    this.orders = [];
    this.page = 1;
    this.getOrders();
  }

  onFilialChange(){
    console.log('Filial = ' + this.select_filial);
  }
  onEstadoChange(){
    console.log('Estado = ' + this.estado + ' tirei onda');
    var filtered = this.filtra(this.orders);
    this.orders = [];
    this.orders = filtered;
  }
  filtra(value){
  var filtered = [];
    for (let index = 0; index < value.length; index++) {
        if (value[index].status_wmas == this.estado) {
          filtered.push(value[index]);
        }
    }
     return filtered;
  }
  zeraFiltro1(){
    this.estado = 'Todos';
  }
  zeraFiltro2(){
    this.select_filial = 'Todas';
  }


}

  
