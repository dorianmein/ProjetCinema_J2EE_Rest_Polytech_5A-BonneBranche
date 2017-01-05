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
var realisateur_service_1 = require("../services/realisateur.service");
var RealisateursComponent = (function () {
    function RealisateursComponent(realisateurService) {
        this.realisateurService = realisateurService;
    }
    RealisateursComponent.prototype.loadRealisateurs = function () {
        var _this = this;
        this.realisateurService.getRealisateurs()
            .subscribe(function (data) { return _this.realisateurs = data; }, function (error) { return _this.errorMessage = error.status + " est le statuts d'error"; });
    };
    RealisateursComponent.prototype.ngOnInit = function () {
        this.loadRealisateurs();
    };
    return RealisateursComponent;
}());
RealisateursComponent = __decorate([
    core_1.Component({
        selector: 'realisateurs',
        templateUrl: 'app/templates/realisateurs.component.html'
    }),
    __metadata("design:paramtypes", [realisateur_service_1.RealisateurService])
], RealisateursComponent);
exports.RealisateursComponent = RealisateursComponent;
//# sourceMappingURL=realisateurs.component.js.map