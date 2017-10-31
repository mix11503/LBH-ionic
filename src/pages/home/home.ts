import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalnewsPage } from '../modalnews/modalnews';
import { ModalController } from 'ionic-angular';
import { News, NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsList:News[] =[]; 

  constructor(public navCtrl: NavController , public modalCtrl: ModalController, public newsProv: NewsProvider) {
    this.newsProv.loadNews().subscribe(data => { this.newsList = data;
                                                console.log(this.newsList);});
  }

   presentModal(news: News) {
    let modal = this.modalCtrl.create(ModalnewsPage, {'news': news});
    modal.present();
  }
}
