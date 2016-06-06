import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the PreferencesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/preferences/preferences.html',
})
export class PreferencesPage {
  constructor(public nav: NavController) {

    this.prefsBeforeRide = [{

      preference: "Open Doors"
    }, {
        preference: "Greeting"
      }, {
        preference: "Car Temp"
      }, {
        preference: "Luggage Asst."
      },
      {
        preference: "Wait 5 mins"
      },
      {
        preference: "TBD"
      },
    ]

    this.prefsInCar = [{

      preference: "Music"
    }, {
        preference: "Smoking"
      }, {
        preference: "Charger"
      }, {
        preference: "No Convo"
      },
      {
        preference: "Convo Ok"
      },
      {
        preference: "Water"
      },
    ]

    this.prefsDropOff = [{

      preference: "Open Doors"
    }, {
        preference: "Escort"
      }, {
        preference: "Luggage Asst"
      }, {
        preference: "TBD"
      },
    ]    
  }
}
