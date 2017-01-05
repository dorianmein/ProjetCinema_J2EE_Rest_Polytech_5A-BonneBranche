import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Acteur } from '../model/acteur';
import { ActeurService } from '../services/acteur.service';

@Component({
    selector: 'acteurs',
    templateUrl: 'app/templates/acteurs.component.html',
	 providers: [ActeurService]
})
export class ActeursComponent  implements OnInit {
    acteurs: Acteur[];
	errorMessage: string;
    acteurSelect:Acteur ;

    constructor(private acteurService: ActeurService) { }

    loadActeurs(){
        this.acteurService.getActeurs()
            .subscribe(
						data => this.acteurs = data,
						error => this.errorMessage = error.status + " est le statuts d'error"
			);
    }

    selectActor(acteur:Acteur){ // to emit
        this.acteurSelect=acteur;
    }

    deleteSelectedActor(): void {
        this.acteurService.deleteActeur(this.acteurSelect.noAct)
            .subscribe(
                acteurSelect => {
                    this.loadActeurs();
                });
    }
	
	ngOnInit(): void{
            this.loadActeurs();
    }
}