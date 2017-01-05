import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Personnage } from '../model/personnage';
import { MainService } from './main.service';

@Injectable()
export class PersonnageService extends MainService {

    constructor(http: Http) {
        super(http);
    }

    getPersonnages(): Observable<Personnage[]> {
        var url = this.baseUrl+ "/personnage/getall";
        return this.http.get(url).map(response => <Personnage[]> response.json());
    }

    getPersonnageByActor(id: number): Observable<Personnage> {
        var url = this.baseUrl + "personnage/getPersonnageByActeur?noAct=" + id;
        return this.http.get(url).map(response => <Personnage> response.json());
    }
}