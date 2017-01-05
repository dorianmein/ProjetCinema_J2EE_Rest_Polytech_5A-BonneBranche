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
 * Created by sydne on 26/12/2016.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var personnage_1 = require("../model/personnage");
var personnage_service_1 = require("../services/personnage.service");
var film_service_1 = require("../services/film.service");
var acteur_service_1 = require("../services/acteur.service");
var PersonnageFormComponent = (function () {
    function PersonnageFormComponent(personnageService, filmService, acteurService, location) {
        this.personnageService = personnageService;
        this.filmService = filmService;
        this.acteurService = acteurService;
        this.location = location;
    }
    PersonnageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personnage = new personnage_1.Personnage();
        this.filmService.getFilms()
            .subscribe(function (films) { return _this.films = films; });
        this.acteurService.getActeurs()
            .subscribe(function (acteurs) { return _this.acteurs = acteurs; });
    };
    PersonnageFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.personnageService.addPersonnage(this.personnage)
            .subscribe(function (personnage) { _this.goBack(); });
    };
    PersonnageFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PersonnageFormComponent;
}());
PersonnageFormComponent = __decorate([
    core_1.Component({
        selector: 'personnageform',
        templateUrl: 'app/templates/personnageform.component.html'
    }),
    __metadata("design:paramtypes", [personnage_service_1.PersonnageService,
        film_service_1.FilmService,
        acteur_service_1.ActeurService,
        common_1.Location])
], PersonnageFormComponent);
exports.PersonnageFormComponent = PersonnageFormComponent;
//# sourceMappingURL=personnageform.component.js.map