import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../providers/auth/auth.service';
import { DataService } from './../../providers/data/data.service';
import { User } from 'firebase/app';
import { Profile } from './../../models/profile/profile.interface';
import { LoadingController, Loading } from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
  
  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;
  
  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private data: DataService, private auth: AuthService, private loading: LoadingController) {
    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: "Loading Profile..."
    })
  }
  
  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe(auth => {
      this.authUser = auth;
      this.data.getProfile(this.authUser).subscribe(profile => {
        this.userProfile = <Profile>profile.val();
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      });
    });
  }  


}
