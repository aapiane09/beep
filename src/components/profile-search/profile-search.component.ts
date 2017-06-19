import { Profile } from './../../models/profile/profile.interface';
import { DataService } from './../../providers/data/data.service';
import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[]

  @Output() selectedProfile: EventEmitter<Profile>

  constructor(private data: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string) {
    const trimmedQuery = query.trim();
    if (trimmedQuery === query) {
    this.data.searchUser(query).subscribe(profiles => {
      console.log(profiles);
      this.profileList = profiles;
     })
    }
  }
}
