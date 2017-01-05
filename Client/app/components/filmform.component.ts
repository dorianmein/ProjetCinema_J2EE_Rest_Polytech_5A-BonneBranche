import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {Film} from "../model/film";
import {Realisateur} from "../model/realisateur";
import {Categorie} from "../model/categorie";

import {FilmService} from "../services/film.service";
import {CategorieService} from "../services/categorie.service";
import {RealisateurService} from "../services/realisateur.service";

@Component({
    selector: 'filmform',
    templateUrl: 'app/templates/filmform.component.html'
})
export class FilmFormComponent implements OnInit {
    film: Film = new Film();
    categories: Categorie[];
    realisateurs: Realisateur[];

    constructor(
        private filmService: FilmService,
        private categorieService: CategorieService,
        private realisateurService: RealisateurService,
        private location: Location
    ) {}

    ngOnInit() {
        this.film = new Film();
        this.categorieService.getCategories()
            .subscribe(categories => this.categories = categories);

        this.realisateurService.getRealisateurs()
            .subscribe(realisateurs => this.realisateurs = realisateurs);
    }

    onSubmit() {
        this.film.noFilm = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        this.filmService.addFilm(this.film)
            .subscribe( film => this.goBack() );

    }

    goBack() {
        this.location.back();
    }
}