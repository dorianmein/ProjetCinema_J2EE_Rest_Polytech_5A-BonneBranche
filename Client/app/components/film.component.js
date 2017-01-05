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
/**
 * Created by sydne on 24/12/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var film_service_1 = require("../services/film.service");
var categorie_service_1 = require("../services/categorie.service");
var realisateur_service_1 = require("../services/realisateur.service");
var FilmViewComponent = (function () {
    function FilmViewComponent(filmService, categorieService, realisateurService, route, location) {
        this.filmService = filmService;
        this.categorieService = categorieService;
        this.realisateurService = realisateurService;
        this.route = route;
        this.location = location;
    }
    FilmViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.filmService.getFilm(+params['id']); })
            .subscribe(function (film) { return _this.film = film; });
        this.categorieService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
        this.realisateurService.getRealisateurs()
            .subscribe(function (realisateurs) { return _this.realisateurs = realisateurs; });
    };
    FilmViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    FilmViewComponent.prototype.save = function () {
        var _this = this;
        this.filmService.updateFilm(this.film)
            .subscribe(function (film) {
            _this.film = film;
            _this.location.back();
        });
    };
    return FilmViewComponent;
}());
FilmViewComponent = __decorate([
    core_1.Component({
        selector: 'filmdetail',
        templateUrl: 'app/templates/film.component.html'
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        categorie_service_1.CategorieService,
        realisateur_service_1.RealisateurService,
        router_1.ActivatedRoute,
        common_1.Location])
], FilmViewComponent);
exports.FilmViewComponent = FilmViewComponent;
//# sourceMappingURL=film.component.js.map