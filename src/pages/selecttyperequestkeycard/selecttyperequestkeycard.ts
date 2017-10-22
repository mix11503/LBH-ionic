import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the SelecttyperequestkeycardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecttyperequestkeycard',
  templateUrl: 'selecttyperequestkeycard.html',
})
export class SelecttyperequestkeycardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , 
  	public ViewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecttyperequestkeycardPage');
  }

  dismiss() {
    this.ViewController.dismiss();
  }

}
