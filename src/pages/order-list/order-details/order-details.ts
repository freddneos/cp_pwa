import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  
   order: any[];

constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.order = this.navParams.get('data');
    console.log('chegou no modal , itens = ' + this.order)
 }

 dismiss(){
     this.navCtrl.pop();
 }

}
/*
function captalizeName(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());
  }*/