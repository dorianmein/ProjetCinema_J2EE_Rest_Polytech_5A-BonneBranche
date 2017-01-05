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
///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
var core_1 = require("@angular/core");
var acteur_1 = require("../model/acteur");
var common_1 = require("@angular/common");
var acteur_service_1 = require("../services/acteur.service");
var ActeurFormComponent = (function () {
    function ActeurFormComponent(acteurService, location) {
        this.acteurService = acteurService;
        this.location = location;
    }
    ActeurFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.acteurService.addActeur(this.acteur)
            .subscribe(function (acteur) { _this.goBack(); });
    };
    ActeurFormComponent.prototype.ngOnInit = function () {
        this.acteur = new acteur_1.Acteur();
    };
    ActeurFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ActeurFormComponent;
}());
ActeurFormComponent = __decorate([
    core_1.Component({
        selector: 'acteurform',
        templateUrl: 'app/templates/acteurform.component.html'
    }),
    __metadata("design:paramtypes", [acteur_service_1.ActeurService,
        common_1.Location])
], ActeurFormComponent);
exports.ActeurFormComponent = ActeurFormComponent;
//# sourceMappingURL=acteurform.component.js.map