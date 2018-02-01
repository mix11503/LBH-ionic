import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalnewsPage } from '../modalnews/modalnews';
import { ModalController } from 'ionic-angular';
import { News, NewsProvider } from '../../providers/news/news';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsList:News[] =[]; 

  constructor(public navCtrl: NavController , 
              public modalCtrl: ModalController, 
              public newsProv: NewsProvider,
              private oneSignal: OneSignal) {
    this.newsProv.loadNews().subscribe(data => { this.newsList = data });
  }

   presentModal(news: News) {
    let modal = this.modalCtrl.create(ModalnewsPage, {'news': news});
    modal.present();
  }
}
