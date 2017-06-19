import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from './../../models/profile/profile.interface';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getExistingProfile(profile: Profile) {
    //comes from (existingProfile) emitted from component
    this.existingProfile = profile;
  } 
  
  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile });
  }

}