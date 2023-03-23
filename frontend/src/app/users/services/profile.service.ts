import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from 'src/constants/api.constants';
import { UpdateProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(user: UpdateProfileModel) {
    const id = user.id;

    const data = {
      username: user.username,
      password: user.password !== '' ? user.password : undefined,
      password_confirmation:
        user.password_confirmation !== ''
          ? user.password_confirmation
          : undefined,
    };

    return this.http.post(apiConstants.profile + '/' + id, data);
  }
}
