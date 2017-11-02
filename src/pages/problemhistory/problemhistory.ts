import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProblemRep, ProblemRepProvider } from '../../providers/problem-rep/problem-rep';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ProblemhistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problemhistory',
  templateUrl: 'problemhistory.html',
})
export class ProblemhistoryPage {
  
  roomId: string;
  pbmList: ProblemRep[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public pbmProv: ProblemRepProvider) {
    this.roomId = this.user.roomId;
    this.pbmProv.loadProblem().subscribe( data => { this.pbmList = data });
  }

  

}
