import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private auth: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
      const result = await this.auth.signInWithEmailAndPassword(this.account);
      this.loginStatus.emit(result);
  }

  navigateToRegisterPage(pageName: string){
    this.navCtrl.push('RegisterPage');
    // pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
