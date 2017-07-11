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
var AddJobComponent = (function () {
    function AddJobComponent(Tool) {
        this.Tool = Tool;
        // vars
        this.submitted = false;
    }
    AddJobComponent.prototype.onSubmit = function () { this.submitted = true; };
    AddJobComponent.prototype.getTools = function () {
        this.Tool.getTools()
            .then(function (toolList) {
            console.log(toolList);
        });
    };
    AddJobComponent.prototype.ngOnInit = function () {
    };
    ;
    return AddJobComponent;
}());
AddJobComponent = __decorate([
    core_1.Component({
        selector: 'add-job',
        styles: ["\n    .wrapper-md {\n      padding-left:220px;\n    }\n  "],
        templateUrl: './addJob.component.html',
        providers: [user_services_1.ToolService]
    }),
    __metadata("design:paramtypes", [user_services_1.ToolService])
], AddJobComponent);
exports.AddJobComponent = AddJobComponent;
//# sourceMappingURL=addJob.component.js.map