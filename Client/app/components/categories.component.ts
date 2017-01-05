import { Component, OnInit } from '@angular/core';

import { Categorie } from '../model/categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
    selector: 'categories',
    templateUrl: 'app/templates/categories.component.html'
})
export class CategoriesComponent implements OnInit {
    categories: Categorie[];

    constructor(private categorieService: CategorieService) { }

    loadCategories() {
        this.categorieService.getCategories()
            .subscribe(data => this.categories = data);
    }

    ngOnInit() {
        this.loadCategories();
     }
}