"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// base modules
var core_1 = require("@angular/core"); // core
var platform_browser_1 = require("@angular/platform-browser"); // hot reload
var forms_1 = require("@angular/forms"); // ngModel
var http_1 = require("@angular/http"); // https requests
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
// routes file
var app_routing_module_1 = require("./app-routing.module");
// modules to load
var app_component_1 = require("./main/app.component");
var header_component_1 = require("./headerNav/header.component");
var leftnav_component_1 = require("./leftNav/leftnav.component");
var addJob_component_1 = require("./addJob/addJob.component");
var user_services_1 = require("./services/user.services");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule // import routes
        ],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderNavComponent, leftnav_component_1.LeftNavComponent, addJob_component_1.AddJobComponent],
        providers: [user_services_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map