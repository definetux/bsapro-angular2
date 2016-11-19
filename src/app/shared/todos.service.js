import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosService {
     constructor (http: Http) {
         this.http = http;
     }

     getTodos() {
         return this.http.get('/api/todos').map((res:Response) => res.json());
     }

     getTodo(id) {
         return this.http.get('/api/todo/' + id).map((res:Response) => res.json());
     }
}