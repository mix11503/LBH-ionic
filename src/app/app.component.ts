import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MaintenancePage } from '../pages/maintenance/maintenance';
import { MtnhistoryPage } from '../pages/mtnhistory/mtnhistory';
import { MtnhistoryshowPage } from '../pages/mtnhistoryshow/mtnhistoryshow';
import { KeycardPage } from '../pages/keycard/keycard';
import { ReportproblemPage } from '../pages/reportproblem/reportproblem';
import { ProblemhistoryPage } from '../pages/problemhistory/problemhistory';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { ParcelinboxPage } from '../pages/parcelinbox/parcelinbox';
import { DecorationrequestPage } from '../pages/decorationrequest/decorationrequest';
import { DecorationhistoryPage } from '../pages/decorationhistory/decorationhistory';
import { StuffmovingrequestPage } from '../pages/stuffmovingrequest/stuffmovingrequest';
import { StuffmovinghistoryPage } from '../pages/stuffmovinghistory/stuffmovinghistory';
import { PhonebookPage } from '../pages/phonebook/phonebook';
import { LoginPage } from '../pages/login/login';
import { OneSignal } from '@ionic-native/onesignal';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  HomePage:any = HomePage;
  MaintenancePage:any = MaintenancePage;
  MtnhistoryPage:any = MtnhistoryPage;
  MtnhistoryshowPage:any = MtnhistoryshowPage;
  KeycardPage:any = KeycardPage;
  ReportproblemPage:any = ReportproblemPage;
  ProblemhistoryPage:any = ProblemhistoryPage;
  BluetoothPage:any = BluetoothPage;
  ParcelinboxPage:any = ParcelinboxPage;
  DecorationrequestPage:any = DecorationrequestPage;
  DecorationhistoryPage:any = DecorationhistoryPage;
  StuffmovingrequestPage:any = StuffmovingrequestPage;
  StuffmovinghistoryPage:any = StuffmovinghistoryPage;
  PhonebookPage:any = PhonebookPage;
  LoginPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public oneSignal: OneSignal) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.oneSignal.startInit('ad05f2e7-20a3-4e8d-b8fc-006362a35cfc', '860740804614');
      
      //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
      
      this.oneSignal.endInit();

      this.oneSignal.sendTags({'floor':'2','room':'202'});

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page:any) {
    this.nav.setRoot(page);
   // this.nav.setRoot(page.component);
  }

  showSubmenu: boolean = false;
  showSubmenukeycard: boolean = false;
  showsubmenuproblemreport: boolean = false;
  showsubmenubluetooth: boolean = false;
  showsubmenuparcel:boolean = false;
  showsubmenudecoration:boolean = false;
  showsubmenustuffmoving:boolean = false;
  showsubmenuphonebook:boolean = false;

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }

  menuItemHandlerkeycard(): void {
    this.showSubmenukeycard = !this.showSubmenukeycard;
  }

   menuItemHandlerproblemreport(): void {
    this.showsubmenuproblemreport = !this.showsubmenuproblemreport;
  }

   menuItemHandlerbluetooth(): void {
    this.showsubmenubluetooth = !this.showsubmenubluetooth;
  }  

  menuItemHandlerparcel(): void {
    this.showsubmenuparcel = !this.showsubmenuparcel;
  }  

   menuItemHandlerdecoration(): void {
    this.showsubmenudecoration = !this.showsubmenudecoration;
  }  

   menuItemHandlerstuffmoving(): void {
    this.showsubmenustuffmoving = !this.showsubmenustuffmoving;
  }  

  menuItemHandlerphonebook(): void {
    this.showsubmenuphonebook = !this.showsubmenuphonebook;
  }  
}
