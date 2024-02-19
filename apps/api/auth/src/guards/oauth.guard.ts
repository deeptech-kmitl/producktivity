import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import * as firebaseAdmin from 'firebase-admin'

@Injectable()
export class OAuthGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const authProps: string[] = context.switchToHttp().getRequest().headers?.authorization.split(' ');
      console.log(authProps)
      if (authProps.length === 1 || authProps[0] !== "Bearer") {
        throw new UnauthorizedException("invalid token")
      }

      const decodedIdToken = await firebaseAdmin.auth()
        .verifyIdToken(authProps[1])

      console.log("==== decodedToken properties ====", decodedIdToken)

      return true;

    } catch (error) {
      console.error("==== OAuthGuard error ====", error)
      throw error
    }
  }
}

