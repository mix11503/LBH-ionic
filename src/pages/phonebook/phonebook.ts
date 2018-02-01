import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Staff, StaffProvider } from '../../providers/staff/staff';
import { CallNumber } from '@ionic-native/call-number'; 

/**
 * Generated class for the PhonebookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-phonebook',
  templateUrl: 'phonebook.html',
})
export class PhonebookPage {

  staffList: Staff[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public staffProv: StaffProvider,
              private callNumber: CallNumber) {
    this.staffProv.loadStaff().subscribe(data => { this.staffList = data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonebookPage');
  }

  call(tel: any){
    console.log("TEL :"+ tel)
    this.callNumber.callNumber('0'+tel, true)
  }

}
