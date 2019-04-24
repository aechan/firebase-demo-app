import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private registerEmail: string;
  private registerPassword: string;
  private loginEmail: string;
  private loginPassword: string;

  constructor(private alertCtrl: AlertController) { }

  private async loginFailed(reason: string) {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed',
      message: reason,
      buttons: ['OK']
    });
    await alert.present();
    this.loginEmail = '';
    this.loginPassword = '';
  }

  private async registerFailed(reason: string) {
    const alert = await this.alertCtrl.create({
      header: 'Register Failed',
      message: reason,
      buttons: ['OK']
    });
    await alert.present();
    this.registerEmail = '';
    this.registerPassword = '';
  }

  private loggedIn(): boolean {
    return false;
  }

  private login() {

  }

  private register() {

  }

  private logout() {

  }
}
