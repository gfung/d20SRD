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
var user_services_1 = require("../services/user.services");
var HeaderNavComponent = (function () {
    function HeaderNavComponent(User) {
        this.User = User;
    }
    HeaderNavComponent.prototype.getUserdat = function () {
        var _this = this;
        this.User.getUser()
            .then(function (user) {
            _this.cUser = user;
            _this.cUser.user.gravatar = 'https://www.gravatar.com/avatar/#' + _this.cUser.user.gravatar;
        });
    };
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.getUserdat();
    };
    ;
    return HeaderNavComponent;
}());
HeaderNavComponent = __decorate([
    core_1.Component({
        selector: 'header-nav',
        templateUrl: './header.component.html',
        providers: [user_services_1.UserService]
    }),
    __metadata("design:paramtypes", [user_services_1.UserService])
], HeaderNavComponent);
exports.HeaderNavComponent = HeaderNavComponent;
//# sourceMappingURL=header.component.js.map