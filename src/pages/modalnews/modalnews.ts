import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { News } from '../../providers/news/news';

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

  news: News;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams ,
  	          public ViewController: ViewController){
    this.news = this.navParams.get('news');
  }

   dismiss() {
    this.ViewController.dismiss();
  }

}
