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
var personnage_service_1 = require("../services/personnage.service");
var acteur_service_1 = require("../services/acteur.service");
var film_service_1 = require("../services/film.service");
var PersonnagesComponent = (function () {
    function PersonnagesComponent(personnageService, acteurService, filmService) {
        this.personnageService = personnageService;
        this.acteurService = acteurService;
        this.filmService = filmService;
    }
    PersonnagesComponent.prototype.laodPersonnages = function () {
        var _this = this;
        this.personnageService.getPersonnages()
            .subscribe(function (data) { return _this.personnages = data; });
    };
    PersonnagesComponent.prototype.loadActeurs = function () {
        var _this = this;
        this.acteurService.getActeurs()
            .subscribe(function (acteurs) { return _this.acteurs = acteurs; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    PersonnagesComponent.prototype.loadFilms = function () {
        var _this = this;
        this.filmService.getFilms()
            .subscribe(function (films) { return _this.films = films; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    PersonnagesComponent.prototype.ngOnInit = function () {
        this.laodPersonnages();
        this.loadActeurs();
        this.loadFilms();
    };
    PersonnagesComponent.prototype.getFilm = function (id) {
        for (var key in this.films) {
            var film = this.films[key];
            if (film.noFilm == id) {
                return film.titre;
            }
        }
        return "non trouvé";
    };
    PersonnagesComponent.prototype.getActeur = function (id) {
        for (var key in this.acteurs) {
            var acteur = this.acteurs[key];
            if (acteur.noAct == id) {
                return acteur.nomAct;
            }
        }
        return "acteur non identifié";
    };
    return PersonnagesComponent;
}());
PersonnagesComponent = __decorate([
    core_1.Component({
        selector: 'personnages',
        templateUrl: 'app/templates/personnages.component.html'
    }),
    __metadata("design:paramtypes", [personnage_service_1.PersonnageService,
        acteur_service_1.ActeurService,
        film_service_1.FilmService])
], PersonnagesComponent);
exports.PersonnagesComponent = PersonnagesComponent;
//# sourceMappingURL=personnages.component.js.map