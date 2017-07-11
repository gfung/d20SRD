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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    function UserService(http) {
        this.http = http;
        this.userUrl = 'api/user'; // URL to web api
    }
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Get the current logged in user deatils
     *
     * @returns {Promise<ResLocals>}
     *
     * @memberof UserService
     */
    UserService.prototype.getUser = function () {
        return this.http
            .get(this.userUrl)
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
var ToolService = (function () {
    function ToolService(http) {
        this.http = http;
        this.toolUrl = '/scheduler/tools'; // URL to web api
    }
    ToolService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ToolService.prototype.getTools = function () {
        return this.http
            .get(this.toolUrl)
            .toPromise()
            .then(function (response) {
            console.log(response);
            return response.json().data;
        })
            .catch(this.handleError);
    };
    return ToolService;
}());
exports.ToolService = ToolService;
//# sourceMappingURL=user.services.js.map