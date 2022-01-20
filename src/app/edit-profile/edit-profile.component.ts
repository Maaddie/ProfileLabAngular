import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { UserProfile } from '../UserProfile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private profileUserService: ProfileServiceService) { }
  userProfile: UserProfile = this.profileUserService.getUserProfile();

  ngOnInit(): void {
  }

}
