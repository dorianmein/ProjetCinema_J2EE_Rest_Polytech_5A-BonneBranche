import { Component, OnInit } from '@angular/core';

import { Film } from '../model/film';
import { FilmService } from '../services/film.service';
import {Realisateur} from "../model/realisateur";
import {Categorie} from "../model/categorie";
import {CategorieService} from "../services/categorie.service";
import {RealisateurService} from "../services/realisateur.service";

@Component({
    selector: 'films',
    templateUrl: 'app/templates/films.component.html'
})
export class FilmsComponent implements OnInit {
    films: Film[];
    filmSelected : Film;
    categories: Categorie[];
    realisateurs: Realisateur[];
    errorMessage: string;

    constructor(    private filmService: FilmService,
                    private categorieService: CategorieService,
                    private realisateurService: RealisateurService) { }

    loadFilms(): void {
        this.filmService.getFilms()
            .subscribe(data => this.films = data,
                error => this.errorMessage = error.status + " est le statuts d'error"
            );
    }

    loadRealisateurs() {
        this.realisateurService.getRealisateurs()
            .subscribe(realisateurs => this.realisateurs = realisateurs,
                error => this.errorMessage = error.status + " est le statuts d'error");
    }

    loadCategories() {
        this.categorieService.getCategories()
            .subscribe(categories => this.categories = categories);
    }

    ngOnInit() {
        this.loadFilms();
        this.loadRealisateurs();
        this.loadCategories();
    }

    selectFilm(film : Film) : void {
        this.filmSelected = film;
    }

    getRealisateur(id:number) : string {
        for ( var rea in this.realisateurs) {
            var value = this.realisateurs [rea];
            if (id == value.noRea) {
                return value.nomRea;
            }
        }
        return "not";
    }

    getCategorie(code: string ) : string {

        for ( var key in this.categories) {
            var categorie = this.categories[key];
            if (categorie.codeCat==code) {
                return categorie.libelleCat;
            }
        }
        return "non trouvée";
    }

    deleteFilm(): void {
        this.filmService.deleteFilm(this.filmSelected.noFilm)
            .subscribe( data => this.films = data,
                error => this.errorMessage = error.status + " est le statuts d'error"
            );
    }

}