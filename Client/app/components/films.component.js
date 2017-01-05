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
var film_service_1 = require("../services/film.service");
var categorie_service_1 = require("../services/categorie.service");
var realisateur_service_1 = require("../services/realisateur.service");
var FilmsComponent = (function () {
    function FilmsComponent(filmService, categorieService, realisateurService) {
        this.filmService = filmService;
        this.categorieService = categorieService;
        this.realisateurService = realisateurService;
    }
    FilmsComponent.prototype.loadFilms = function () {
        var _this = this;
        this.filmService.getFilms()
            .subscribe(function (data) { return _this.films = data; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    FilmsComponent.prototype.loadRealisateurs = function () {
        var _this = this;
        this.realisateurService.getRealisateurs()
            .subscribe(function (realisateurs) { return _this.realisateurs = realisateurs; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    FilmsComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categorieService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    FilmsComponent.prototype.ngOnInit = function () {
        this.loadFilms();
        this.loadRealisateurs();
        this.loadCategories();
    };
    FilmsComponent.prototype.selectFilm = function (film) {
        this.filmSelected = film;
    };
    FilmsComponent.prototype.getRealisateur = function (id) {
        for (var rea in this.realisateurs) {
            var value = this.realisateurs[rea];
            if (id == value.noRea) {
                return value.nomRea;
            }
        }
        return "not";
    };
    FilmsComponent.prototype.getCategorie = function (code) {
        for (var key in this.categories) {
            var categorie = this.categories[key];
            if (categorie.codeCat == code) {
                return categorie.libelleCat;
            }
        }
        return "non trouvée";
    };
    FilmsComponent.prototype.deleteFilm = function () {
        var _this = this;
        this.filmService.deleteFilm(this.filmSelected.noFilm)
            .subscribe(function (data) { return _this.films = data; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    return FilmsComponent;
}());
FilmsComponent = __decorate([
    core_1.Component({
        selector: 'films',
        templateUrl: 'app/templates/films.component.html'
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        categorie_service_1.CategorieService,
        realisateur_service_1.RealisateurService])
], FilmsComponent);
exports.FilmsComponent = FilmsComponent;
//# sourceMappingURL=films.component.js.map