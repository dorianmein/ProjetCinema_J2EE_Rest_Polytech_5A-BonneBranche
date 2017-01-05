/**
 * Created by sydne on 24/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Film} from "../model/film";
import {Realisateur} from "../model/realisateur";
import {FilmService} from "../services/film.service";
import {CategorieService} from "../services/categorie.service";
import {RealisateurService} from "../services/realisateur.service";
import {Categorie} from "../model/categorie";


@Component({
    selector: 'filmdetail',
    templateUrl: 'app/templates/film.component.html'
})
export class FilmViewComponent implements OnInit {
    film: Film;
    categories: Categorie[];
    realisateurs: Realisateur[];

    constructor(
        private filmService: FilmService,
        private categorieService: CategorieService,
        private realisateurService: RealisateurService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.filmService.getFilm(+params['id']))
            .subscribe(film => this.film = film);

        this.categorieService.getCategories()
            .subscribe(categories => this.categories = categories);

        this.realisateurService.getRealisateurs()
            .subscribe(realisateurs => this.realisateurs = realisateurs);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.filmService.updateFilm(this.film)
            .subscribe(film => {
                this.film = film;
                this.location.back();
            });
    }
}
