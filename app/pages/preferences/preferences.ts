import {Page,NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/preferences/preferences.html',
  inputs: ['isDisabled']
})

export class PreferencesPage {
  constructor(public nav: NavController) {
    

    this.passengerPrefs = [{

        preference: "Open Doors"
      }, {
        preference: "Greeting"
      }, {
        preference: "Car Temp"
      }, {
        preference: "Luggage Asst."
      }, {
        preference: "Wait 5 mins"
      }, {
        preference: "Escort"
      },{
        preference: "Music"
      }, {
        preference: "Smoking"
      }, {
        preference: "Charger"
      },
    ]


}
//button toggle
// toggle() {
//   this.isOn = !this.isOn;

// }


}