import { ProfileService } from './../../services/profile.service';
import { ProfileModel } from './../../models/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../state/auth/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private store: Store<AppState>,
    private ProfileService: ProfileService
  ) {
    this.store.select('auth').subscribe((user) => {
      this.username = user.username || '';
      this.profileForm.patchValue(user);
    });
  }

  update = false;

  username = '';

  profileForm: ProfileModel = new FormGroup({
    id: new FormControl(0),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    password_confirmation: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  submit() {
    this.update = false;
    this.ProfileService.updateProfile(this.profileForm.value as any).subscribe(
      (res: any) => {
        this.update = true;
        this.username = res.username;
        this.profileForm.patchValue({
          password: '',
          password_confirmation: '',
        });
        const newuser = {
          id: res.id,
          username: res.username,
          created_at: res.created_at,
          updated_at: res.updated_at,
        };
        localStorage.setItem('user', JSON.stringify(newuser));
        this.store.dispatch(AuthActions.login(newuser));
      }
    );
  }
}
