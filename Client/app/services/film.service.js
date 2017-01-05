"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var main_service_1 = require("./main.service");
var FilmService = (function (_super) {
    __extends(FilmService, _super);
    function FilmService(http) {
        var _this = _super.call(this, http) || this;
        _this.baseUrl = _this.baseUrl;
        return _this;
    }
    FilmService.prototype.getFilms = function () {
        var url = this.baseUrl + "film/getall";
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    FilmService.prototype.getFilm = function (id) {
        var url = this.baseUrl + "film/getbyid?noFilm=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    FilmService.prototype.updateFilm = function (film) {
        var url = this.baseUrl + "film/update?"
            + "noFilm=" + film.noFilm
            + "&titre=" + film.titre
            + "&duree=" + film.duree
            + "&dateSortie=" + film.dateSortie
            + "&budget=" + film.budget
            + "&montantRecette=" + film.montantRecette
            + "&noRea=" + film.noRea
            + "&codeCat=" + film.codeCat;
        return this.http.post(url).map(function (response) { return response.json(); });
    };
    FilmService.prototype.addFilm = function (film) {
        var url = this.baseUrl + "film/save/";
        var body = JSON.stringify(film);
        return this.http.post(url, body, this.options).map(function (response) { return response.json(); });
    };
    FilmService.prototype.deleteFilm = function (id) {
        var url = this.baseUrl + "film/delete?noFilm=" + id;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    return FilmService;
}(main_service_1.MainService));
FilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map