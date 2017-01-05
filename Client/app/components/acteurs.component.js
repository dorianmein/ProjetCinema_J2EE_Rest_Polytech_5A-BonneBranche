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
var acteur_service_1 = require("../services/acteur.service");
var ActeursComponent = (function () {
    function ActeursComponent(acteurService) {
        this.acteurService = acteurService;
    }
    ActeursComponent.prototype.loadActeurs = function () {
        var _this = this;
        this.acteurService.getActeurs()
            .subscribe(function (data) { return _this.acteurs = data; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    ActeursComponent.prototype.selectActor = function (acteur) {
        this.acteurSelect = acteur;
    };
    ActeursComponent.prototype.deleteSelectedActor = function () {
        var _this = this;
        this.acteurService.deleteActeur(this.acteurSelect.noAct)
            .subscribe(function (acteurSelect) {
            _this.loadActeurs();
        });
    };
    ActeursComponent.prototype.ngOnInit = function () {
        this.loadActeurs();
    };
    return ActeursComponent;
}());
ActeursComponent = __decorate([
    core_1.Component({
        selector: 'acteurs',
        templateUrl: 'app/templates/acteurs.component.html',
        providers: [acteur_service_1.ActeurService]
    }),
    __metadata("design:paramtypes", [acteur_service_1.ActeurService])
], ActeursComponent);
exports.ActeursComponent = ActeursComponent;
//# sourceMappingURL=acteurs.component.js.map