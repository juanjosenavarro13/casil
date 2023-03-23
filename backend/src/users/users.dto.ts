import { IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterUserDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  ni: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password_confirmation: string;
}

export class LoginUserDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  ni: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
