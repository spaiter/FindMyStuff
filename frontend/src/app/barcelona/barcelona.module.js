"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var barcelona_common_1 = require("./barcelona.common");
var BarcelonaModule = /** @class */ (function () {
    function BarcelonaModule() {
    }
    BarcelonaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(barcelona_common_1.ROUTES)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: barcelona_common_1.COMPONENT_DECLARATIONS.slice(),
            providers: barcelona_common_1.PROVIDERS_DECLARATIONS.slice()
        })
    ], BarcelonaModule);
    return BarcelonaModule;
}());
exports.BarcelonaModule = BarcelonaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY2Vsb25hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhcmNlbG9uYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDBDQUErQztBQUUvQyx1REFBNEY7QUFpQjVGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBZjNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBTSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQ1AseUNBQXNCLFFBQzFCO1lBQ0QsU0FBUyxFQUNKLHlDQUFzQixRQUMxQjtTQUNGLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBST1VURVMsIENPTVBPTkVOVF9ERUNMQVJBVElPTlMsIFBST1ZJREVSU19ERUNMQVJBVElPTlMgfSBmcm9tICcuL2JhcmNlbG9uYS5jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFJPVVRFUylcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRfREVDTEFSQVRJT05TXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlBST1ZJREVSU19ERUNMQVJBVElPTlNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJjZWxvbmFNb2R1bGUgeyB9XG4iXX0=