/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersAuthGuard } from './users.auth.guard';
import { LoginUserDTO, RegisterUserDTO } from './users.dto';
import { AuthResponseModel } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('register')
  @UseGuards(UsersAuthGuard)
  registerUser(
    @Body() user: RegisterUserDTO,
  ): Promise<AuthResponseModel | HttpException> {
    return this.UsersService.register(user);
  }

  @Post('login')
  loginUser(
    @Body() user: LoginUserDTO,
  ): Promise<AuthResponseModel | HttpException> {
    return this.UsersService.login(user);
  }
}
