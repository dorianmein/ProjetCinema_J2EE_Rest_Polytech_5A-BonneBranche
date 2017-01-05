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
var acteur_service_1 = require("../services/acteur.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var ActeurViewComponent = (function () {
    function ActeurViewComponent(acteurService, route, location) {
        this.acteurService = acteurService;
        this.route = route;
        this.location = location;
    }
    ActeurViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.acteurService.getActeur(+params['id']); })
            .subscribe(function (acteur) { return _this.acteur = acteur; });
    };
    ActeurViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActeurViewComponent.prototype.save = function () {
        var _this = this;
        this.acteurService.updateActeur(this.acteur)
            .subscribe(function (acteur) {
            _this.acteur = acteur;
            _this.location.back();
        });
    };
    return ActeurViewComponent;
}());
ActeurViewComponent = __decorate([
    core_1.Component({
        selector: 'acteurdetail',
        templateUrl: 'app/templates/acteur.component.html'
    }),
    __metadata("design:paramtypes", [acteur_service_1.ActeurService,
        router_1.ActivatedRoute,
        common_1.Location])
], ActeurViewComponent);
exports.ActeurViewComponent = ActeurViewComponent;
//# sourceMappingURL=acteur.component.js.map