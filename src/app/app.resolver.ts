import { Injectable } from '@angular/core';
import { Resolve ,ActivatedRouteSnapshot} from '@angular/router';

import { APiService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class RouterResolver implements Resolve<any> {
  constructor(private apiService: APiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getUsers(route.paramMap.get('id')).catch(() => {
      return Observable.of('data not available at this time');
    });
  }
}