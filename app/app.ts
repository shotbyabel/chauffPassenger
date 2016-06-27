import {ViewChild} from '@angular/core';
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {PreferencesPage} from './pages/preferences/preferences';
import {RegisterPage} from './pages/register/register';
import {TipPage} from './pages/tip/tip';


// @App({
//   template: '<ion-nav [root]="rootPage"></ion-nav>',
//   config: {} // http://ionicframework.com/docs/v2/api/config/Config/
// })
@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

// export class MyApp {
//   rootPage: any = PreferencesPage;

//   constructor(platform: Platform) {
//     platform.ready().then(() => {

//       StatusBar.styleDefault();
//     });
//   }
// }
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Chauff Passenger', component: HomePage },
      { title: 'Preference', component: PreferencesPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Tip', component: TipPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}