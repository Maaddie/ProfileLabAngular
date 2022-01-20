import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { UserProfile } from '../UserProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  // providers: [ProfileServiceService]
})
export class UserProfileComponent implements OnInit {
  
  
  constructor(private profileUserService: ProfileServiceService) { }
  userProfile: UserProfile = this.profileUserService.getUserProfile();
  
  

  ngOnInit(): void {
  }

}
