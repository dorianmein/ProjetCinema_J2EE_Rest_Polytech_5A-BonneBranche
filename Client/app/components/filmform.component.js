"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var film_1 = require("../model/film");
var film_service_1 = require("../services/film.service");
var categorie_service_1 = require("../services/categorie.service");
var realisateur_service_1 = require("../services/realisateur.service");
var FilmFormComponent = (function () {
    function FilmFormComponent(filmService, categorieService, realisateurService, location) {
        this.filmService = filmService;
        this.categorieService = categorieService;
        this.realisateurService = realisateurService;
        this.location = location;
        this.film = new film_1.Film();
    }
    FilmFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.film = new film_1.Film();
        this.categorieService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
        this.realisateurService.getRealisateurs()
            .subscribe(function (realisateurs) { return _this.realisateurs = realisateurs; });
    };
    FilmFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.film.noFilm = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        this.filmService.addFilm(this.film)
            .subscribe(function (film) { return _this.goBack(); });
    };
    FilmFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    return FilmFormComponent;
}());
FilmFormComponent = __decorate([
    core_1.Component({
        selector: 'filmform',
        templateUrl: 'app/templates/filmform.component.html'
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        categorie_service_1.CategorieService,
        realisateur_service_1.RealisateurService,
        common_1.Location])
], FilmFormComponent);
exports.FilmFormComponent = FilmFormComponent;
//# sourceMappingURL=filmform.component.js.map