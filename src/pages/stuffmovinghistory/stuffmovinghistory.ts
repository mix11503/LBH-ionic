import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MovingStuff, MovingStuffProvider } from '../../providers/moving-stuff/moving-stuff';

/**
 * Generated class for the StuffmovinghistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-stuffmovinghistory',
  templateUrl: 'stuffmovinghistory.html',
})
export class StuffmovinghistoryPage {

  movList: MovingStuff[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public movProv: MovingStuffProvider) {
    this.movProv.loadMov().subscribe(data => { this.movList = data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffmovinghistoryPage');
  }

  showalertdelete() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Request',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Cancle',
          handler: () => {
            console.log('disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
