/**
 * Created by sydne on 26/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Personnage} from "../model/personnage";
import {Film} from "../model/film";
import {Acteur} from "../model/acteur";
import {PersonnageService} from "../services/personnage.service";
import {FilmService} from "../services/film.service";
import {ActeurService} from "../services/acteur.service";

@Component({
    selector: 'personnageform',
    templateUrl: 'app/templates/personnageform.component.html'
})
export class PersonnageFormComponent implements OnInit {
    personnage: Personnage ;
    films: Film[];
    acteurs: Acteur[];

    constructor(
        private personnageService: PersonnageService,
        private filmService: FilmService,
        private acteurService: ActeurService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.personnage = new Personnage ();
        this.filmService.getFilms()
            .subscribe(films => this.films = films);

        this.acteurService.getActeurs()
            .subscribe(acteurs => this.acteurs = acteurs);
    }

    onSubmit(): void {
        this.personnageService.addPersonnage(this.personnage)
            .subscribe(personnage => {this.goBack()});
    }

    goBack(): void {
        this.location.back();
    }
}