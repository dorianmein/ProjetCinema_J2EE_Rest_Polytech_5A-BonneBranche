import { Component, OnInit } from '@angular/core';

import { Realisateur } from '../model/realisateur';
import { RealisateurService } from '../services/realisateur.service';

@Component({
    selector: 'realisateurs',
    templateUrl: 'app/templates/realisateurs.component.html'
})
export class RealisateursComponent implements OnInit {
    realisateurs: Realisateur[];
    errorMessage: string;

    constructor(private realisateurService: RealisateurService) { }

    loadRealisateurs() {
        this.realisateurService.getRealisateurs()
        .subscribe(data => this.realisateurs = data,
        error => this.errorMessage = error.status + " est le statuts d'error");
    }

    ngOnInit() {
        this.loadRealisateurs();
     }
}