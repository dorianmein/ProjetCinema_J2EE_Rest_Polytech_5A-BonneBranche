import { Component, OnInit } from '@angular/core';
import { Personnage } from '../model/personnage';
import { PersonnageService } from '../services/personnage.service';
import {Film} from "../model/film";
import {Acteur} from "../model/acteur";
import {ActeurService} from "../services/acteur.service";
import {FilmService} from "../services/film.service";

@Component({
    selector: 'personnages',
    templateUrl: 'app/templates/personnages.component.html'
})
export class PersonnagesComponent implements OnInit {
    personnages: Personnage[];
    films : Film [];
    acteurs : Acteur [];
    errorMessage : string;

    constructor(private personnageService: PersonnageService,
                private acteurService : ActeurService,
                private filmService : FilmService) { }

    laodPersonnages() {
        this.personnageService.getPersonnages()
        .subscribe(data => this.personnages = data);
    }

    loadActeurs(){
        this.acteurService.getActeurs()
            .subscribe(
                acteurs => this.acteurs = acteurs,
                error => this.errorMessage = error.status + " est le statuts d'error"
            );
    }

    loadFilms(): void {
        this.filmService.getFilms()
            .subscribe(films => this.films = films,
                error => this.errorMessage = error.status + " est le statuts d'error"
            );
    }

    ngOnInit() {
        this.laodPersonnages();
        this.loadActeurs();
        this.loadFilms();
     }

    getFilm(id:number ) : string {

        for ( var key in this.films) {
            var film = this.films[key];
            if (film.noFilm == id) {
                return film.titre;
            }
        }
        return "non trouvé";
    }

    getActeur(id:number ) : string {

        for ( var key in this.acteurs) {
            var acteur = this.acteurs[key];
            if (acteur.noAct == id) {
                return acteur.nomAct;
            }
        }
        return "acteur non identifié";
    }
}