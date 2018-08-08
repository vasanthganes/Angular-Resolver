import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouterGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}