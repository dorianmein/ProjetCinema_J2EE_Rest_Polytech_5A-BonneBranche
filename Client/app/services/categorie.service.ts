import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Categorie } from '../model/categorie';
import { MainService } from './main.service';

@Injectable()
export class CategorieService extends MainService {

    constructor(http: Http) {
        super(http);
    }

    getCategories(): Observable<Categorie[]> {
        var url = this.baseUrl + "categorie/getall";
        return this.http.get(url).map(response => <Categorie[]> response.json());
    }

    getCategorie(id: number): Observable<Categorie> {
        var url = this.baseUrl + "categorie/getbyid?noCat=" + id;
        return this.http.get(url).map(response => <Categorie> response.json());
    }

    updateCategorie(categorie: Categorie): Observable<Categorie> {
        var url = this.baseUrl + "categorie/update/";
        var body = JSON.stringify(categorie);
        return this.http.post(url, body, this.options).map(response => <Categorie> response.json());
    }

    addACatgorie(categorie: Categorie): Observable<Categorie> {
        var url = this.baseUrl + "categorie/save/";
        var body = JSON.stringify(categorie);
        return this.http.post(url, body, this.options).map(response => <Categorie> response.json());
    }

    deleteCategorie(id: number): Observable<Categorie> {
        var url = this.baseUrl + "categorie/delete?noCat=" + id;
        return this.http.get(url).map(response => <Categorie> response.json());
    }
}