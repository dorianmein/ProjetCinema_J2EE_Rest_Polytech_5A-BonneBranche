/**
 * Created by sydne on 24/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Acteur } from '../model/acteur';
import { ActeurService } from '../services/acteur.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'acteurdetail',
    templateUrl: 'app/templates/acteur.component.html'
})
export class ActeurViewComponent implements OnInit {
    private acteur: Acteur;

    constructor(
        private acteurService: ActeurService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.acteurService.getActeur(+params['id']))
            .subscribe(acteur => this.acteur = acteur);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.acteurService.updateActeur(this.acteur)
            .subscribe(acteur => {
                this.acteur = acteur;
                this.location.back();
            });
    }
}