///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from "@angular/core";
import { Acteur } from '../model/acteur';
import { Location } from '@angular/common';
import {ActeurService} from "../services/acteur.service";

@Component({
    selector: 'acteurform',
    templateUrl: 'app/templates/acteurform.component.html'
})

export class ActeurFormComponent implements OnInit {
    private acteur : Acteur;

    constructor(
        private acteurService: ActeurService,
        private location: Location
    ) {}

    onSubmit(): void {
        this.acteurService.addActeur(this.acteur)
            .subscribe(acteur => {this.goBack()});
    }

    ngOnInit() : void {
        this.acteur = new Acteur ();
    }

    goBack(): void {
        this.location.back();
    }
}
