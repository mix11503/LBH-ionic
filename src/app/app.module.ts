import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalnewsPage } from '../pages/modalnews/modalnews';
import { MaintenancePage } from '../pages/maintenance/maintenance';
import { MtnhistoryPage } from '../pages/mtnhistory/mtnhistory';
import { MtnhistoryshowPage } from '../pages/mtnhistoryshow/mtnhistoryshow';
import { KeycardPage } from '../pages/keycard/keycard';
import { SelecttyperequestkeycardPage } from '../pages/selecttyperequestkeycard/selecttyperequestkeycard';
import { ReportproblemPage } from '../pages/reportproblem/reportproblem';
import { ProblemhistoryPage } from '../pages/problemhistory/problemhistory';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { ParcelinboxPage } from '../pages/parcelinbox/parcelinbox';
import { DecorationrequestPage } from '../pages/decorationrequest/decorationrequest';
import { DecorationhistoryPage } from '../pages/decorationhistory/decorationhistory';
import { StuffmovingrequestPage } from '../pages/stuffmovingrequest/stuffmovingrequest';
import { StuffmovinghistoryPage } from '../pages/stuffmovinghistory/stuffmovinghistory';
import { PhonebookPage } from '../pages/phonebook/phonebook';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalnewsPage,
    MaintenancePage,
    MtnhistoryPage,
    MtnhistoryshowPage,
    KeycardPage,
    SelecttyperequestkeycardPage,
    ReportproblemPage,
    ProblemhistoryPage,
    BluetoothPage, 
    ParcelinboxPage,
    DecorationrequestPage,
    DecorationhistoryPage,
    StuffmovingrequestPage,
    StuffmovinghistoryPage,
    PhonebookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalnewsPage,
    MaintenancePage,
    MtnhistoryPage,
    MtnhistoryshowPage,
    KeycardPage,
    SelecttyperequestkeycardPage,
    ReportproblemPage,
    ProblemhistoryPage,
    BluetoothPage,
    ParcelinboxPage,
    DecorationrequestPage,
    DecorationhistoryPage,
    StuffmovingrequestPage,
    StuffmovinghistoryPage,
    PhonebookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
