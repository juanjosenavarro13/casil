import { FormControl, FormGroup } from '@angular/forms';

export type loginModelFB = FormGroup<{
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}>;
