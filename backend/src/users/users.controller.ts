/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Post,
  HttpException,
  Put,
  Get,
  Param,
} from '@nestjs/common';
import { LoginUserDTO, RegisterUserDTO } from './users.dto';
import { AuthResponseModel } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('register')
  registerUser(
    @Body() user: RegisterUserDTO,
  ): Promise<AuthResponseModel | HttpException> {
    return this.UsersService.register(user);
  }

  @Put('login')
  loginUser(
    @Body() user: LoginUserDTO,
  ): Promise<AuthResponseModel | HttpException> {
    return this.UsersService.login(user);
  }
}
