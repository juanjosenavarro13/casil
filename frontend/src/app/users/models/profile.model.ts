import { FormControl, FormGroup } from '@angular/forms';

export type ProfileModel = FormGroup<{
  id: FormControl<number | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  password_confirmation: FormControl<string | null>;
}>;

export interface UpdateProfileModel {
  id: number;
  username: string;
  password: string;
  password_confirmation: string;
}
