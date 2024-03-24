import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      if (
        request.cookies.login_jwt &&
        this.jwtService.verify(request.cookies.login_jwt)
      ) {
        return false;
      }
    } catch (error) {
      return true;
    }

    return true;
  }
}
