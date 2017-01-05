import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response} from '@angular/http';

@Injectable()
export class MainService {

    protected baseUrl = "http://localhost:8080/";
    protected headers = new Headers({'Content-Type': 'application/json'});
    protected options = new RequestOptions({ headers: this.headers });

    constructor(protected http: Http) { }
	
}