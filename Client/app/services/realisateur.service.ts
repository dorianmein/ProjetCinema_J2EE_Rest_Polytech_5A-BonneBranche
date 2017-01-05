import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Realisateur } from '../model/realisateur';
import { MainService } from './main.service';

@Injectable()
export class RealisateurService extends MainService {

    constructor(http: Http) {
        super(http);
        this.baseUrl = this.baseUrl + "realisateur/getall";
    }

    getRealisateurs(): Observable<Realisateur[]> {
        return this.http.get(this.baseUrl).map(response => <Realisateur[]> response.json());
    }
}