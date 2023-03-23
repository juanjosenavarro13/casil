/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class UsersAdminGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.switchToHttp().getRequest().headers.authorization;
    if (!token) return false;

    try {
      const verify = this.JwtService.verify(token.split(' ')[1]);
      return verify.admin ? true : false;
    } catch (err) {
      return false;
    }
  }
}
