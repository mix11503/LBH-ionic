import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalnewsPage } from '../modalnews/modalnews';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	test : string;

  constructor(public navCtrl: NavController , public modalCtrl: ModalController) {



  }

   presentModal() {
    let modal = this.modalCtrl.create(ModalnewsPage);
    modal.present();
  }
}
