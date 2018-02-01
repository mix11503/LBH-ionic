import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Decoration, DecorationProvider } from '../../providers/decoration/decoration';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DecorationhistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-decorationhistory',
  templateUrl: 'decorationhistory.html',
})
export class DecorationhistoryPage {

  roomId: string;
  decList: Decoration[] = [];

  constructor(public navCtrl: NavController, 
  	          public alertCtrl: AlertController,
              public navParams: NavParams,
              public user: UserProvider,
              public decProv: DecorationProvider){
    this.roomId = this.user.roomId;
    this.decProv.loadDec().subscribe(data => { this.decList = data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecorationhistoryPage');
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
