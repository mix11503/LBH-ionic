import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SelecttyperequestkeycardPage } from '../selecttyperequestkeycard/selecttyperequestkeycard';


/**
 * Generated class for the KeycardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-keycard',
  templateUrl: 'keycard.html',
})
export class KeycardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams 
  	,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeycardPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create( SelecttyperequestkeycardPage);
    modal.present();
  }

}
