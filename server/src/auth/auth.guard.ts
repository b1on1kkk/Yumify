import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
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
        return true;
      }
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return false;
  }
}
