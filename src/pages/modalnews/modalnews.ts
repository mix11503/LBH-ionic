import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalnewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalnews',
  templateUrl: 'modalnews.html',
})
export class ModalnewsPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams ,
  	public ViewController: ViewController){}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalnewsPage');
  }

   dismiss() {
    this.ViewController.dismiss();
  }

}
