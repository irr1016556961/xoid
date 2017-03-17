import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private currency: string;
  private serial: string;
  private xoid: string;
  
  constructor(public navCtrl: NavController) {
    
  }

}
