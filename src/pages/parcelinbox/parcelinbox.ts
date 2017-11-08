import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Parcel, ParcelProvider } from '../../providers/parcel/parcel';

/**
 * Generated class for the ParcelinboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-parcelinbox',
  templateUrl: 'parcelinbox.html',
})
export class ParcelinboxPage {

  parcelList: Parcel[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public parcelProv: ParcelProvider) {
    this.parcelProv.loadParcel().subscribe( data => { this.parcelList = data });
  }

  ionViewDidLoad() {
  }

}
