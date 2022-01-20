import { Injectable } from '@angular/core';
import { UserProfile } from './UserProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  UserProfile:UserProfile = {
    "name": "Cassly",
    "contactInfo": "cassly@GC.com",
    "bio": "Likes front-end languages"
  };
  constructor() {}
    
    getUserProfile():UserProfile{
      return this.UserProfile;
    }

    setUserProfile(userProfileNew: UserProfile):void {
    this.UserProfile.name = userProfileNew.name;
    this.UserProfile.contactInfo = userProfileNew.contactInfo;
    this.UserProfile.bio = userProfileNew.bio;
      
    }
   }



